class HanziLookupWebWorker {
  constructor(wasm_uri) {
    importScripts("hanzi_lookup.js");
    this.instance = wasm_bindgen(wasm_uri);
  }

  lookup(data) {
    return this.instance.then(() => wasm_bindgen.lookup(data));
  }
}

let memoized_worker;

onmessage = (event) => {
  if ("init" in event.data) {
    memoized_worker = new HanziLookupWebWorker(event.data["init"]);
  } else if ("data" in event.data) {
    memoized_worker.lookup(event.data.data).then(output => {
      postMessage({ source: event.data.data, result: output });
    });
  }
};
