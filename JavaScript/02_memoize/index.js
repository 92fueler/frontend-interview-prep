let myMeoize = function (func) {
  let cache = {};
  return function (key) {
    if (!cache[key]) {
      cache[key] = func.apply(this, arugments);
    }
    return cache[key];
  }
}