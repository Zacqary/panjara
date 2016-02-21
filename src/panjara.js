var storage;
let initialize = (globalObj) => {
  if (!globalObj.__panjaraფანჯარა) {
    Object.defineProperty(globalObj, "__panjaraფანჯარა", {
      value: new Map()
    })
  }
  storage = globalObj.__panjaraფანჯარა;
}

if (window) {
  initialize(window);
} else if (GLOBALS) {
  initialize(GLOBALS);
}

export let remember = ({id}, globals) => {
  if (!storage.has(id)) {
    storage.set(id, globals);
    return globals;
  } else {
    return storage.get(id);
  }
}
export default remember;
