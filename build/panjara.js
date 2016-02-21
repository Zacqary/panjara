"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var storage;
var initialize = function initialize(globalObj) {
  if (!globalObj.__panjaraფანჯარა) {
    Object.defineProperty(globalObj, "__panjaraფანჯარა", {
      value: new Map()
    });
  }
  storage = globalObj.__panjaraფანჯარა;
};

if (window) {
  initialize(window);
} else if (GLOBALS) {
  initialize(GLOBALS);
}

var remember = function remember(_ref, globals) {
  var id = _ref.id;

  if (!storage.has(id)) {
    storage.set(id, globals);
    return globals;
  } else {
    return storage.get(id);
  }
};
exports.remember = remember;
exports["default"] = remember;
