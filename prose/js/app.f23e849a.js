(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],p=0,h=[];p<o.length;p++)r=o[p],i[r]&&h.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},i={app:0},a=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/prose/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07bb":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("vue-headful",{attrs:{title:t.pageTitle}}),null==t.mode?[n("div",{staticClass:"noApp"})]:t._e(),"error"==t.mode?[n("div",{staticClass:"noApp"},[t._v("\n      Something went wrong ;-[\n    ")])]:t._e(),"listen"==t.mode?[n("div",{staticClass:"topFixed"},[n("ControlPanel",{attrs:{loading:t.audioLoading,autoPause:t.autoPause,playing:t.playing,currPos:t.currPos,totalSec:t.totalSec,title:t.title},on:{action:t.onControlPanel}})],1),n("div",{staticClass:"centrer"},[n("ParaList",{attrs:{paras:t.paras,dictEntries:t.content.dictEntries,episode:t.episode,activeParaIx:t.active.paraIx,activeSegIx:t.active.segIx},on:{jump:t.onJump,showEntries:t.onShowEntries}}),n("div",{staticClass:"anno-pad"},[t._v(" ")])],1),n("div",{staticClass:"fixed-centrer-outer"},[n("div",{staticClass:"fixed-centrer"},[n("div",{staticClass:"annotation"},[n("InfoPanel",{attrs:{entryIxs:t.entryIxsToShow,content:t.content,pinnedEntries:t.pinnedEntries,mode:t.mode,episode:t.episode},on:{pin:t.onEntryPin,unpin:t.onEntryUnpin}})],1)])])]:t._e()],2)},a=[],r=(n("7f7f"),n("386d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"controlPanel"},[n("div",{class:t.loadingClass},[t._v("Loading...")]),n("i",{staticClass:"fa smaller fa-step-backward",on:{click:function(e){return t.onClick("back")}}}),n("i",{staticClass:"fa",class:t.playPauseClass,on:{click:function(e){return t.onClick("playPause")}}}),n("i",{staticClass:"fa smaller fa-undo",on:{click:function(e){return t.onClick("repeat")}}}),n("i",{staticClass:"fa smaller fa-step-forward",on:{click:function(e){return t.onClick("next")}}}),n("div",{staticClass:"time"},[t._v(t._s(t.timeStr))]),n("div",{staticClass:"autoPause",on:{click:function(e){return t.onClick("autoPause")}}},[t._v("auto pause: "),n("span",{class:t.autoPauseClass},[t._v(t._s(t.autoPauseLabel))])]),n("div",{staticClass:"title"},[t._v(t._s(t.title))])])}),o=[],c=(n("c5f6"),n("6275").default),l={name:"ControlPanel",data:function(){return{}},props:{title:String,loading:Boolean,autoPause:Boolean,playing:Boolean,currPos:Number,totalSec:Number},computed:{loadingClass:function(){return this.loading?"loading visible":"loading"},playPauseClass:function(){return this.playing?"fa-pause-circle-o active":"fa-play-circle-o"},timeStr:function(){return c(this.currPos,!1,0)+" / "+c(this.totalSec,!1,0)},autoPauseClass:function(){return this.autoPause?"on":""},autoPauseLabel:function(){return this.autoPause?"on":"off"}},methods:{onClick:function(t){this.$emit("action",t)}},components:{}},u=l,p=n("2877"),h=Object(p["a"])(u,r,o,!1,null,null,null),d=h.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"paraList"},t._l(t.paras,function(e,s){return n("Para",{key:"para-"+s,attrs:{paraSegs:e,dictEntries:t.dictEntries,paraIx:s,episode:t.episode,active:t.activeParaIx==s,activeSegIx:t.activeSegInPara(s)},on:{jump:t.onJump,showEntries:t.onShowEntries}})}),1)},v=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"paraDiv",class:"para "+t.dynClass},[t._m(0),t._l(t.paraSegs.slice().reverse(),function(t,e){return n("div",{key:"segmStripe-"+e,class:"segmStripe segmStripe"+e})}),n("p",t._l(t.paraSegs,function(e,s){return n("Segment",{key:"segm-"+s,attrs:{segm:e,dictEntries:t.dictEntries,episode:t.episode,paraIx:t.paraIx,segmIx:s,active:t.activeSegIx==s},on:{showEntries:t.onShowEntries}})}),1),t._l(t.paraSegs.slice().reverse(),function(e,s){return n("div",{key:"segmHandle-"+s,class:"segmHandle segmHandle"+s,on:{mouseover:function(e){return t.onOverHandle(s)},mouseleave:function(e){return t.onLeaveHandle(s)},click:function(e){return t.onClickHandle(s)}}})})],2)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"paraLeft"},[n("span",{staticClass:"paraMarker"},[t._v(" ")]),n("span",{staticClass:"segmMarker"},[t._v(" ")])])}],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{ref:"segmentDiv",class:"segment "+t.dynClass+" ix"+t.segmIx},[t._l(t.segm.words,function(e,s){return[n("span",{key:"wd-"+s,staticClass:"word",on:{click:function(e){return t.onWordClick(s)}}},[t.spaceBefore(s)?n("span",[t._v(t._s(" "))]):t._e(),n("span",[t._v(t._s(e.lead))]),n("span",[t._v(t._s(e.text))]),n("span",[t._v(t._s(e.trail))])])]})],2)},x=[],S=(n("ac6a"),{name:"Segment",data:function(){return{}},components:{},props:{episode:String,paraIx:Number,segmIx:Number,segm:Object,dictEntries:Array,active:Boolean},computed:{dynClass:function(){var t="";return this.active&&(t+=" active"),t},space:function(){return" "}},watch:{active:function(t){}},mounted:function(){},methods:{spaceBefore:function(t){return 0==t?0!=this.segmIx:!this.segm.words[t].glueLeft},onWordClick:function(t){var e=this.segm.words[t].entries;e&&e.length>0?this.$emit("showEntries",this.segm.startSec,e):this.$emit("showEntries",this.segm.startSec,null),window._paq.push(["trackEvent","Show-Entries",this.episode,this.segm.words[t].text])}}}),w=S,_=Object(p["a"])(w,y,x,!1,null,null,null),E=_.exports,P={name:"Para",data:function(){return{}},props:{episode:String,paraIx:Number,paraSegs:Array,dictEntries:Array,active:Boolean,activeSegIx:Number},computed:{dynClass:function(){var t="";return this.active&&(t+=" active"),t},space:function(){return" "}},mounted:function(){for(var t=this.$refs.paraDiv,e=t.getBoundingClientRect(),n=0;n<this.paraSegs.length;++n){var s=this.paraSegs.length-n-1,i=t.querySelector(".segment.ix"+n),a=i.getBoundingClientRect(),r=a.top-e.top,o=t.querySelector(".segmStripe"+s);o.style.top=r+"px",o.style.height=a.height+"px";var c=t.querySelector(".segmHandle"+s);c.style.top=r+"px",c.style.height=a.height+"px"}},watch:{active:function(t){if(0!=t){var e=document.documentElement.scrollTop,n=this.$refs.paraDiv,s=document.getElementsByClassName("topFixed")[0].offsetHeight,i=10,a=n.offsetTop+n.offsetHeight+s-e-document.documentElement.offsetHeight+i;if(a>0){var r={top:document.documentElement.scrollTop+a,behavior:"smooth"};document.documentElement.scroll(r)}var o=n.offsetTop-e-i;if(o<0){r={top:document.documentElement.scrollTop+o,behavior:"smooth"};document.documentElement.scroll(r)}}}},methods:{onOverHandle:function(t){var e=this.$refs.paraDiv;e.querySelector(".segmHandle"+t).classList.add("indicated");var n=this.paraSegs.length-t-1;e.querySelector(".segment.ix"+n).classList.add("indicated")},onLeaveHandle:function(t){var e=this.$refs.paraDiv;e.querySelector(".segmStripe"+t).classList.remove("visible"),e.querySelector(".segmHandle"+t).classList.remove("indicated");var n=this.paraSegs.length-t-1;e.querySelector(".segment.ix"+n).classList.remove("indicated")},onClickHandle:function(t){this.$emit("jump",this.paraIx,this.paraSegs.length-t-1)},onShowEntries:function(t,e){this.$emit("showEntries",t,e)}},components:{Segment:E}},I=P,C=Object(p["a"])(I,m,g,!1,null,null,null),k=C.exports,b={name:"ParaList",data:function(){return{}},props:{episode:String,paras:Array,dictEntries:Array,activeParaIx:Number,activeSegIx:Number},computed:{},methods:{activeSegInPara:function(t){return t!=this.activeParaIx?-1:this.activeSegIx},onJump:function(t,e){this.$emit("jump",t,e)},onShowEntries:function(t,e){this.$emit("showEntries",t,e)}},components:{Para:k}},L=b,$=Object(p["a"])(L,f,v,!1,null,null,null),O=$.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"infoPanel"},[t.showInstructions?n("div",{staticClass:"ifu"},[n("h2",[t._v("Short help")]),n("p",[t._v("\n      Click left of the text to play from a given sentence. Click on a word in the text to show dictionary entries.\n      Next to each dictionary entry, the pin icon makes it sticky, so it appears again by itself whenever you play\n      the same sentence.\n    ")]),t._m(0),t._m(1),t._m(2),t._m(3)]):t._e(),t.showNoEntries?n("div",{staticClass:"ifu"},[n("h2",[t._v("No entries")]),n("p",[t._v("\n      Sorry; we didn't find any dictionary matches for this word.\n    ")])]):t._e(),t.pinnedEntries&&t.pinnedEntries.length>0?n("div",{staticClass:"pinnedEntries"},t._l(t.pinnedEntries,function(e,s){return n("Entry",{key:"entry-"+s,attrs:{entry:e,pinned:!0},on:{pinClicked:t.onUnpin}})}),1):t._e(),n("div",t._l(t.entryIxs,function(e,s){return n("Entry",{key:"entry-"+s,attrs:{entry:t.getEntry(e),pinned:!1},on:{pinClicked:t.onPin}})}),1)])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",{staticClass:"shortcut"},[t._v("Space")]),t._v(" plays or pauses.\n    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",{staticClass:"shortcut"},[t._v("Up")]),t._v(" jumps to previous sentence.\n    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",{staticClass:"shortcut"},[t._v("Down")]),t._v(" jumps to next sentence.\n    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",{staticClass:"shortcut"},[t._v("Left")]),t._v(" repeats current sentence.\n    ")])}],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"entry",class:t.getClass},[n("div",{staticClass:"head"},[n("div",{staticClass:"headword"},[t._v("  "+t._s(t.displayHead))]),n("div",{staticClass:"pin",on:{click:t.onPinClicked}},[n("ImgPushPin")],1)]),n("ul",{staticClass:"senses"},[t._l(t.entry.senses,function(e,s){return[n("li",{key:"sense-"+s,staticClass:"sense"},[t._v("\n        "+t._s(e.srcDef)),n("br"),n("span",{staticClass:"otherLangs"},[t._v(t._s(e.otherLangs))])])]})],2)])},H=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 490.125 490.125","xml:space":"preserve"}},[n("g",[n("path",{attrs:{d:"M300.625,5.025c-6.7-6.7-17.6-6.7-24.3,0l-72.6,72.6c-6.7,6.7-6.7,17.6,0,24.3l16.3,16.3l-40.3,40.3l-63.5-7\n\t\t\t\tc-3-0.3-6-0.5-8.9-0.5c-21.7,0-42.2,8.5-57.5,23.8l-20.8,20.8c-6.7,6.7-6.7,17.6,0,24.3l108.5,108.5l-132.4,132.4\n\t\t\t\tc-6.7,6.7-6.7,17.6,0,24.3c3.3,3.3,7.7,5,12.1,5s8.8-1.7,12.1-5l132.5-132.5l108.5,108.5c3.3,3.3,7.7,5,12.1,5s8.8-1.7,12.1-5\n\t\t\t\tl20.8-20.8c17.6-17.6,26.1-41.8,23.3-66.4l-7-63.5l40.3-40.3l16.2,16.2c6.7,6.7,17.6,6.7,24.3,0l72.6-72.6c3.2-3.2,5-7.6,5-12.1\n\t\t\t\ts-1.8-8.9-5-12.1L300.625,5.025z M400.425,250.025l-16.2-16.3c-6.4-6.4-17.8-6.4-24.3,0l-58.2,58.3c-3.7,3.7-5.5,8.8-4.9,14\n\t\t\t\tl7.9,71.6c1.6,14.3-3.3,28.3-13.5,38.4l-8.7,8.7l-217.1-217.1l8.7-8.6c10.1-10.1,24.2-15,38.4-13.5l71.7,7.9\n\t\t\t\tc5.2,0.6,10.3-1.2,14-4.9l58.2-58.2c6.7-6.7,6.7-17.6,0-24.3l-16.3-16.3l48.3-48.3l160.3,160.3L400.425,250.025z"}})])])},D=[],q={},J=Object(p["a"])(q,A,D,!1,null,null,null),M=J.exports,B={name:"Entry",data:function(){return{}},props:{entry:{type:Object},pinned:Boolean},computed:{displayHead:function(){return this.entry.displayHead&&""!=this.entry.displayHead?this.entry.displayHead:this.entry.head},getClass:function(){return this.pinned?"pinned":""},hanziAlt:function(){return this.entry.hanzi_trad==this.entry.hanzi?"":" • "+this.entry.hanzi_trad}},methods:{onPinClicked:function(){this.$emit("pinClicked",this.entry)}},components:{ImgPushPin:M}},F=B,U=Object(p["a"])(F,N,H,!1,null,null,null),R=U.exports,z={name:"InfoPanel",data:function(){return{}},props:{content:Object,entryIxs:Array,pinnedEntries:Array,mode:String,episode:String},computed:{showInstructions:function(){return(!this.pinnedEntries||0==this.pinnedEntries.length)&&((!this.entryIxs||0==this.entryIxs.length)&&null!==this.entryIxs)},showNoEntries:function(){return null==this.entryIxs&&(!this.pinnedEntries||0==this.pinnedEntries.length)}},methods:{getEntry:function(t){return this.content.dictEntries[t]},onUnpin:function(t){this.$emit("unpin",t)},onPin:function(t){this.$emit("pin",t),window._paq.push(["trackEvent","Pin-Entry",this.episode,t.head])}},components:{Entry:R}},K=z,W=Object(p["a"])(K,T,j,!1,null,null,null),X=W.exports,G=n("a8a2").default,Q=n("bc3a"),V="ppdata",Y={name:"app",data:function(){return{episode:null,audioLoading:!1,mode:null,content:null,paras:null,startSecForEntries:-1,entryIxsToShow:[],pinnedEntries:[],autoPause:!0,playing:!1,currPos:0,totalSec:0,blockTicksTill:-1,active:{paraIx:0,segIx:0}}},components:{ControlPanel:d,ParaList:O,InfoPanel:X},computed:{title:function(){return this.content&&this.content.title?this.content.title:""},pageTitle:function(){var t="";return this.content&&this.content.title&&(t=this.content.title+" | "),t+="Prose Player",t}},methods:{setActive:function(t,e){this.active={paraIx:t,segIx:e},this.entryIxsToShow=[],this.pinnedEntries=it(this.episode,this.paras[t][e].startSec)},onTick:function(){var t=G.getPos();this.playing=G.isPlaying(),this.currPos!=Math.floor(t)&&(this.currPos=Math.floor(t));var e=(new Date).getTime();if(!(e<this.blockTicksTill)&&G.isPlaying()){var n=this.paras[this.active.paraIx][this.active.segIx],s=null;this.active.segIx+1<this.paras[this.active.paraIx].length?s=this.paras[this.active.paraIx][this.active.segIx+1]:this.active.paraIx+1<this.paras.length&&(s=this.paras[this.active.paraIx+1][0]);var i=!0;if(t<n.startSec&&(i=!1),null!=s&&t>=s.startSec&&(i=!1),!i){if(null!=s&&t>=s.startSec&&t<=s.startSec+s.lengthSec){var a=t-s.startSec;return this.autoPause&&a<.1&&G.isPlaying()?void G.pause():void(this.active.segIx+1<this.paras[this.active.paraIx].length?this.setActive(this.active.paraIx,this.active.segIx+1):this.setActive(this.active.paraIx+1,0))}for(var r=0,o=0,c=0;c<this.paras.length;++c)for(var l=0;l<this.paras[c].length;++l){var u=this.paras[c][l];t>=u.startSec&&(r=c,o=l)}this.setActive(r,o)}}},onPlayPause:function(){G.isPlaying()?G.pause():(this.blockTicksTill=(new Date).getTime()+400,G.play())},onJump:function(t,e){var n=this.paras[t][e].startSec;this.setActive(t,e),this.blockTicksTill=(new Date).getTime()+400,G.playFrom(n)},onRepeat:function(){this.onJump(this.active.paraIx,this.active.segIx);var t=this.paras[this.active.paraIx][this.active.segIx].startSec;window._paq.push(["trackEvent","Navigate-Repeat",this.episode,"",tt(t)])},onNext:function(){var t=this.active.paraIx,e=this.active.segIx;if(e+1<this.paras[this.active.paraIx].length)++e;else{if(!(t+1<this.paras.length-1))return;++t,e=0}this.onJump(t,e);var n=this.paras[t][e].startSec;window._paq.push(["trackEvent","Navigate-Next",this.episode,"",tt(n)])},onPrev:function(){var t=this.active.paraIx,e=this.active.segIx;if(e>0)--e;else{if(!(t>0))return;--t,e=this.paras[t].length-1}this.onJump(t,e);var n=this.paras[t][e].startSec;window._paq.push(["trackEvent","Navigate-Prev",this.episode,"",tt(n)])},onControlPanel:function(t){"back"==t?this.onPrev():"next"==t?this.onNext():"repeat"==t?this.onRepeat():"playPause"==t?this.onPlayPause():"autoPause"==t&&(this.autoPause=!this.autoPause,st(this.autoPause))},onShowEntries:function(t,e){this.startSecForEntries=t,this.entryIxsToShow=e},onKeyDown:function(t){var e=null;t.ctrlKey||t.altKey||t.metaKey||t.shiftKey||("Enter"==t.key&&(e="Space"),"edit"!=this.mode&&("ArrowDown"==t.key?e="Down":"ArrowUp"==t.key?e="Up":"ArrowLeft"==t.key?e="Left":" "==t.key&&(e="Space"))),null!=e&&(t.preventDefault(),"Space"==e?this.onPlayPause():"CtrlSpace"==e?this.autoPause=!this.autoPause:"Left"==e?this.onRepeat():"Down"==e?this.onNext():"Up"==e&&this.onPrev())},onEntryUnpin:function(t){var e=this.paras[this.active.paraIx][this.active.segIx].startSec;ot(this.episode,this.startSecForEntries,t,"unpin"),this.pinnedEntries=it(this.episode,e)},onEntryPin:function(t){var e=this.paras[this.active.paraIx][this.active.segIx].startSec;ot(this.episode,this.startSecForEntries,t,"pin"),this.pinnedEntries=it(this.episode,e)}},mounted:function(){var t=null,e="listen",n=this;n.autoPause=nt();var s=new URLSearchParams(window.location.search);t=s.get("ep"),t?(n.episode=t,"listen"!=e&&"segment"!=e&&"edit"!=e||Q.get("/media/"+t+"-segs.json").then(function(s){n.content=s.data,n.paras=Z(n.content.segments),n.mode=e,n.audioLoading=!0,G.onLoad(function(){n.audioLoading=!1,setInterval(n.onTick,10),n.totalSec=G.duration()}),G.initAudio(t),window._paq.push(["trackEvent","Load-Episode",t])}).catch(function(t){console.log(t),n.mode="error"}),window.addEventListener("keydown",this.onKeyDown)):n.mode="error"}};function Z(t){for(var e=[],n=0,s=[],i=0;i<t.length;++i){var a=t[i];a.paraIx!=n&&(e.push(s),s=[],n=a.paraIx),s.push(a)}return 0!=s.length&&e.push(s),e}function tt(t){return(Math.round(100*t)/100).toFixed(2)}var et={autoPause:!0,episodes:[{name:"E179X",segments:[{startSec:9.25,pinnedEntries:[]}]}]};function nt(){var t=at();return t.autoPause}function st(t){var e=at();e.autoPause=1==t,rt(e)}function it(t,e){for(var n=[],s=at(),i=null,a=0;a<s.episodes.length;++a)if(s.episodes[a].name==t){i=s.episodes[a];break}var r=null;if(null!=i)for(var o=0;o<i.segments.length;++o)if(i.segments[o].startSec==e){r=i.segments[o];break}if(!r)return n;for(var c=0;c<r.pinnedEntries.length;++c)n.push(JSON.parse(r.pinnedEntries[c]));return n}function at(){var t=window.localStorage.getItem(V);return t||window.localStorage.setItem(V,JSON.stringify(et)),t=window.localStorage.getItem(V),JSON.parse(t)}function rt(t){window.localStorage.setItem(V,JSON.stringify(t))}function ot(t,e,n,s){for(var i=JSON.stringify(n),a=at(),r=null,o=0;o<a.episodes.length;++o)if(a.episodes[o].name==t){r=a.episodes[o];break}null==r&&(r={name:t,segments:[]},a.episodes.push(r));for(var c=null,l=0;l<r.segments.length;++l)if(r.segments[l].startSec==e){c=r.segments[l];break}if(null==c&&(c={startSec:e,pinnedEntries:[]},r.segments.push(c)),"pin"==s)c.pinnedEntries.push(i);else if("unpin"==s){for(var u=-1,p=0;p<c.pinnedEntries.length;++p)if(c.pinnedEntries[p]==i){u=p;break}-1!=u&&c.pinnedEntries.splice(u,1)}rt(a)}var ct=Y,lt=(n("7c55"),n("b0a0"),Object(p["a"])(ct,i,a,!1,null,null,null)),ut=lt.exports,pt=n("ec02"),ht=n.n(pt);s["a"].config.productionTip=!1,s["a"].component("vue-headful",ht.a),new s["a"]({render:function(t){return t(ut)}}).$mount("#app")},"5c48":function(t,e,n){},6275:function(t,e,n){"use strict";n.r(e);n("f576");e["default"]=function(t,e,n){var s=Math.floor(t/60),i=t-60*s,a=Math.floor(i),r=i-a+"";r=r.substr(2)+"00",r="."+r.substr(0,2),e||(r="");var o=n?3:2;return(s+":").padStart(o,"0")+(a+"").padStart(2,"0")+r}},"7c55":function(t,e,n){"use strict";var s=n("5c48"),i=n.n(s);i.a},a8a2:function(t,e,n){"use strict";n.r(e);var s=n("1e5c"),i=function(){var t=null,e=null,n=!1;function i(i){var a="/media/"+i,r=[a+".webm",a+".m4a"];e=new s["Howl"]({src:r,volume:1,html5:!0,autoplay:!1,onload:function(){t&&t()},onplay:function(){n=!0},onend:function(){n=!1},onpause:function(){n=!1},onstop:function(){n=!1}})}function a(){n&&e.pause()}function r(){n||e.play()}function o(t){e.seek(t),n||e.play()}function c(){var t=void 0;try{t=e.seek()}catch(n){}return"number"==typeof t?t:0}return{onLoad:function(e){t=e},initAudio:i,pause:a,play:r,playFrom:o,getPos:c,isPlaying:function(){return n},duration:function(){return e.duration()||0}}}();e["default"]=i},b0a0:function(t,e,n){"use strict";var s=n("07bb"),i=n.n(s);i.a}});
//# sourceMappingURL=app.f23e849a.js.map