/**
 * How to empty an array in JavaScript?
 */

const emptyArray01 = (arr) => {
  arr = [];
  return arr;
};

const emptyArray02 = (arr) => {
  arr.length = 0;
  return arr;
};

const emptyArray03 = (arr) => {
  return arr.splice(0, arr.length);
};

const emptyArray04 = (arr) => {
  while (arr.length) {
    arr.pop();
  }
  return arr;
};
module.exports = {
  emptyArray01,
  emptyArray02,
  emptyArray03,
  emptyArray04,
};
