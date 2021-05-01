(function (factory) {
  typeof define === 'function' && define.amd ? define('30Growth', factory) :
  factory();
}((function () { 'use strict';

  function scriptname() {
    const d = new Date();
    const dateStr = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + "!" + ("0" + d.getHours()).slice(-2) + "-" + ("0" + d.getMinutes()).slice(-2);
    return '30-growth' + "-" + dateStr;
  }

  function init(w, h) {
    document.title = scriptname();
    paper.install(window);
    paper.settings.insertItems = false;
    const elmDrawing = document.getElementById("drawing");
    elmDrawing.innerHTML = "<canvas id='paper-canvas'></canvas>";
    paper.setup("paper-canvas");
    paper.project.activeLayer.name = "0-base";
    const elmCanvas = document.getElementById("paper-canvas");
    elmCanvas.width = w;
    elmCanvas.height = h;
    const pxWidth = elmDrawing.clientWidth - 1;
    elmCanvas.style.width = pxWidth + "px";
    elmCanvas.style.height = pxWidth * h / w + "px";
  }

  function renderSvg(w, h) {
    const elmSvg = project.exportSVG({
      asString: false,
      precision: 3,
      matchShapes: true
    });
    elmSvg.setAttribute("width", w / 10 + "mm");
    elmSvg.setAttribute("height", h / 10 + "mm");
    elmSvg.setAttribute("viewBox", "0,0," + w + "," + h);
    elmSvg.setAttribute("xmlns:sodipodi", "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd");
    elmSvg.setAttribute("xmlns:inkscape", "http://www.inkscape.org/namespaces/inkscape");
    let svgStr = elmSvg.outerHTML;
    svgStr = svgStr.replaceAll("<path></path>", "");
    svgStr = svgStr.replaceAll(/<g id="([^"]+)"/g, "$& inkscape:groupmode='layer' inkscape:label='$1'"); // <g id="0-base"

    var file;
    var data = [];
    data.push(svgStr);
    var properties = {
      type: 'image/svg+xml'
    };

    try {
      file = new File(data, scriptname() + ".svg", properties);
    } catch {
      file = new Blob(data, properties);
    }

    var url = URL.createObjectURL(file);
    document.getElementById('download').href = url;
    document.getElementById('download').download = scriptname() + ".svg";
  }

  function info(str) {
    document.getElementById("info").getElementsByTagName("label")[0].textContent = str;
  }

  let rand = Math.random;

  function setRandomGenerator(randomFun) {
    rand = randomFun;
  }

  function mulberry32(seed) {
    return function () {
      var t = seed += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  /**
   * Returns a value between min and max, with clipped Gaussian distribution
   * (Nothing >3.6 standard deviations away - less than 0.02% chance)
   * @param {Number} min Low end of the range, inclusive
   * @param {Number} max High end of the range, inclusive
   * @param {Number} skew If 1, symmetric. N>1 skews left, 1/N skews right
   */


  function randn_bm(min, max, skew = 1) {
    // Based on https://stackoverflow.com/a/49434653
    let u = 0,
        v = 0;

    while (u === 0) u = rand(); //Converting [0,1) to (0,1)


    while (v === 0) v = rand();

    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    num = num / 10.0 + 0.5; // Translate to 0 -> 1

    if (num > 1 || num < 0) num = randn_bm(min, max, skew); // resample between 0 and 1 if out of range
    else {
        num = Math.pow(num, skew); // Skew

        num *= max - min; // Stretch to fill range

        num += min; // offset to min
      }
    return num;
  }
  /**
   * Returns a number whose value is limited to the given range.
   *
   * Example: limit the output of this computation to between 0 and 255
   * clamp(x * 255, 0, 255)
   *
   * @param {Number} x The number to clamp.
   * @param {Number} min The lower boundary of the output range
   * @param {Number} max The upper boundary of the output range
   * @returns A number in the range [min, max]
   * @type Number
   */


  function clamp(x, min, max) {
    return Math.min(Math.max(x, min), max);
  }

  ///<reference path="../paper.d.ts" />
  const w = 1480;
  const h = 1050;
  const margin = 50;
  let seed = Math.round(Math.random() * 10000); //seed = 8832;

  const nTrees = 4;
  const nDepth = 6;
  const thicknessTaper = [0.7, 0.3];
  const bottomThickness = [42, 16];
  const lengthReduce = [0.7, 0.3];
  const baseLength = [196, 196];
  const splitAngle = [24, 24, 2];
  const outlineWidth = 4;
  const fillers = [];

  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      setRandomGenerator(mulberry32(seed));
      updateStatus();
      init(w, h);
      setTimeout(async function () {
        await draw();
        updateStatus("Rendering SVG");
        setTimeout(function () {
          renderSvg(w, h);
          updateStatus("Enjoy your trees.");
        }, 20);
      }, 0);
    });
  }
  /** @type{Array<Tree>} */


  const trees = [];

  async function draw() {
    return new Promise(resolve => {
      paper.project.addLayer(new paper.Layer({
        name: "1-brown"
      }));
      paper.project.addLayer(new paper.Layer({
        name: "2-green"
      }));
      updateStatus("Generating trees");
      setTimeout(async function () {
        await makeTrees();
        updateStatus("Calculating streamlines");
        await calcFillers();

        for (let i = 0; i < trees.length; ++i) {
          await hatchTree(i);
          trees[i].visibleOutline.remove();
        }

        resolve();
      }, 0);
    });
  }

  function updateStatus(msg) {
    let str = "Seed: " + seed;
    if (msg) str += "  " + msg;
    info(str);
  }

  async function makeTrees() {
    for (let i = 0; i < nTrees; ++i) {
      let pos;

      while (true) {
        pos = 0.1 + 0.8 * rand();
        let nearestDist = Number.MAX_VALUE;
        trees.forEach(x => {
          if (Math.abs(pos - x.firstSeg.bottomPos) < nearestDist) nearestDist = Math.abs(pos - x.firstSeg.bottomPos);
        });
        if (w * nearestDist >= 100) break;
      }

      trees.push(generateTree(pos, -(nTrees - i) * 40));
    }

    const marginPath = Path.Rectangle(margin, margin, w - 2 * margin, h - 2 * margin);

    for (let i = 0; i < trees.length; ++i) {
      const tree = trees[i]; // Build tree's outline

      recursiveBuildSegs(tree, tree.firstSeg, tree.baseX, h - margin + tree.yOfs, 0); // Crop to within margin

      tree.visibleOutline = tree.visibleOutline.intersect(marginPath); // Subtract this tree's extended outline from previus tree's visible outlines

      for (let j = 0; j < i; ++j) {
        const prevTree = trees[j];
        prevTree.visibleOutline = prevTree.visibleOutline.subtract(tree.extendedOutline);
      }
    }

    for (const tree of trees) {
      tree.visibleOutline.strokeColor = "lightgrey";
      paper.project.activeLayer.addChild(tree.visibleOutline);
    }
  }

  function recursiveBuildSegs(tree, seg, baseX, baseY, depth) {
    buildSeg(tree, seg, baseX, baseY, depth);
    const angleRad = seg.angle / 180 * Math.PI;

    for (const next of seg.nexts) {
      const nextX = baseX - Math.cos(angleRad) * seg.length * next.bottomPos;
      const nextY = baseY - Math.sin(angleRad) * seg.length * next.bottomPos;
      recursiveBuildSegs(tree, next, nextX, nextY, depth + 1);
    }

    function buildSeg(tree, seg, baseX, baseY, depth) {
      // Create visible path for segment, add to tree's list of segment paths, and unite with tree's single outline
      const visiblePath = makeSegmentPath(seg, baseX, baseY);
      tree.segPaths.push(new SegmentPath(visiblePath, depth));
      if (tree.visibleOutline == null) tree.visibleOutline = visiblePath.clone();else tree.visibleOutline = tree.visibleOutline.unite(visiblePath); // Create a path with extra outline, unite with tree's outline path

      const outlinePath = makeSegmentPath(seg, baseX, baseY, outlineWidth);
      if (tree.extendedOutline == null) tree.extendedOutline = outlinePath;else tree.extendedOutline = tree.extendedOutline.unite(outlinePath);
    }
    /**
     * Creates a path that shows the trunk segment.
     * @param {TrunkSegment} seg The segment to display.
     * @param {Number} baseX X coordinate of the segment's base.
     * @param {Number} baseY Y coordinate of the segment's base.
     * @param {Number} ol Outline: make the segment this much larger.
     */


    function makeSegmentPath(seg, baseX, baseY, ol = 0) {
      const pts = [];
      pts.push(new Point(-seg.bottomThickness / 2 - ol, ol));
      pts.push(new Point(seg.bottomThickness / 2 + ol, ol));
      pts.push(new Point(seg.topThickness / 2 + ol, -(seg.length + ol)));
      pts.push(new Point(-seg.topThickness / 2 - ol, -(seg.length + ol)));
      const path = new Path({
        segments: pts,
        closed: true
      });
      const devFromVertical = seg.angle - 90;
      path.rotate(devFromVertical, new Point(0, 0));
      path.translate(new Point(baseX, baseY));
      return path;
    }
  }

  function generateTree(bottomPos, yOfs) {
    const thickness = grv(bottomThickness);
    const ts = new TrunkSegment(bottomPos, thickness, 90, grv(baseLength), thickness * grv(thicknessTaper));
    generate(ts, 0);
    return new Tree(w * ts.bottomPos, yOfs, ts);

    function generate(seg, depth) {
      if (depth == nDepth) return;
      const next1 = new TrunkSegment(1, seg.topThickness, seg.angle - grv(splitAngle), seg.length * grv(lengthReduce), seg.topThickness * grv(thicknessTaper));
      const next2 = new TrunkSegment(1, seg.topThickness, seg.angle + grv(splitAngle), seg.length * grv(lengthReduce), seg.topThickness * grv(thicknessTaper));
      seg.nexts.push(next1);
      seg.nexts.push(next2);

      for (const next of seg.nexts) generate(next, depth + 1);
    }
  }

  function grv(param) {
    if (param.length == 2) return param[0] + randn_bm(-param[1], param[1]);
    const rnd = randn_bm(-param[1] * param[2], param[1] * param[2]);
    return param[0] + clamp(rnd, -param[1], param[1]);
  }

  class SegmentPath {
    constructor(path, depth) {
      /** @type{paper.Path} */
      this.path = path;
      /** @type{Number} */

      this.depth = depth;
    }

  }

  class TrunkSegment {
    constructor(bottomPos, bottomThickness, angle, length, topThickness) {
      this.bottomPos = bottomPos;
      this.bottomThickness = bottomThickness;
      this.angle = angle;
      this.length = length;
      this.topThickness = topThickness;
      this.nexts = [];
    }

  }

  class Tree {
    constructor(baseX, yOfs, firstSeg) {
      this.yOfs = yOfs;
      this.baseX = baseX;
      /** @type{TrunkSegment} */

      this.firstSeg = firstSeg;
      /** @type{Array<SegmentPath>} */

      this.segPaths = [];
      /** @type{paper.Path} */

      this.visibleOutline = null;
      /** @type{paper.Path} */

      this.extendedOutline = null;
    }

  }

  async function hatchTree(treeIx) {
    return new Promise(resolve => {
      // Look at each filler path
      // Eat point by point
      // Use range that's inside tree's outline
      const tree = trees[treeIx];
      let fillerIx = 0;
      setTimeout(processFiller, 0);

      function processFiller() {
        if (fillerIx == fillers.length) {
          resolve();
          return;
        }

        updateStatus("Calculating intersections #" + treeIx + " > " + fillerIx);
        const filler = fillers[fillerIx];
        const points = [];
        let colorIx = -1;

        for (const pt of filler) {
          if (tree.visibleOutline.contains(pt)) {
            points.push(pt);
            if (colorIx == -1) colorIx = chooseColor(tree, pt);
          } else if (points.length != 0) {
            addHatchLine(points, colorIx);
            points.length = 0;
            colorIx = -1;
          }
        }

        if (points.length != 0) addHatchLine(points, colorIx);
        ++fillerIx;
        setTimeout(processFiller, 0);
      }
    }); // Build an open path from provided points, add as random-colored hatch

    function addHatchLine(points, colorIx) {
      const clonedPoints = [];

      for (let i = 0; i < points.length; ++i) clonedPoints.push(new Point(points[i].x, points[i].y));

      for (let i = points.length - 2; i >= 0; --i) clonedPoints.push(new Point(points[i].x, points[i].y));

      const line = new paper.Path(clonedPoints);
      if (colorIx == 0) line.strokeColor = "brown";else line.strokeColor = "forestgreen";
      paper.project.layers[colorIx + 1].activate();
      paper.project.activeLayer.addChild(line);
    } // Pick color for filler streamline (0: brown, 1: green) depending on depth in tree


    function chooseColor(tree, pt) {
      let ix = 1000;

      for (let i = 0; i < tree.segPaths.length; ++i) {
        if (tree.segPaths[i].path.contains(pt) && tree.segPaths[i].depth < ix) {
          ix = tree.segPaths[i].depth;
          break;
        }
      }

      let rnd = rand();
      if (rnd < (ix + 1) / nDepth) return 1;
      return 0;
    }
  }

  const fpars2 = {
    dSep: 0.05,
    dTest: 0.02,
    timeStep: 0.04,
    fieldFun: function (pp) {
      const p = {
        x: (pp.x - 15) / 4,
        y: (pp.y + 9) / 4
      };
      return {
        x: Math.cos(p.y * Math.sign(Math.sin(p.x))),
        y: Math.sin(Math.sqrt(p.x * p.x + p.y * p.y))
      };
    }
  };

  async function calcFillers() {
    const slines = [];
    const ratio = 16 / (w - 2 * margin);
    const bx = (w - 2 * margin) * ratio;
    const by = (h - 2 * margin) * ratio;
    let fpars = fpars2;
    await streamlines({
      vectorField: fpars.fieldFun,
      boundingBox: {
        left: -bx / 2,
        top: -by / 2,
        width: bx,
        height: by
      },
      seed: {
        x: -bx / 2 + 1,
        y: -by / 2 + 1
      },
      dSep: fpars.dSep,
      dTest: fpars.dTest,
      timeStep: fpars.timeStep,
      forwardOnly: false,

      onStreamlineAdded(points) {
        slines.push(points);
        updateStatus("Calculating streamlines: " + slines.length);
      }

    }).run();

    for (const points of slines) {
      const segs = [];

      for (const pt of points) {
        segs.push(new Point(margin + (bx / 2 + pt.x) / ratio, margin + (by / 2 + pt.y) / ratio));
      }

      fillers.push(segs);
    }
  }

})));

(function (factory) {
  typeof define === 'function' && define.amd ? define('geoSpec', factory) :
  factory();
}((function () { 'use strict';



})));

//# sourceMappingURL=script.js.map
