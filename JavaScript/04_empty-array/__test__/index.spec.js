const {
  emptyArray01,
  emptyArray02,
  emptyArray03,
  emptyArray04,
} = require("../index");

let arr = [1, 2, 3, 4, 5, 6, 7];

test("to get an emty array", () => {
  expect(emptyArray01(arr)).toEqual([]);
});

test("to get an emty array", () => {
  expect(emptyArray02(arr)).toEqual([]);
});

test("to get an emty array", () => {
  expect(emptyArray03(arr)).toEqual([]);
});

test("to get an emty array", () => {
  expect(emptyArray04(arr)).toEqual([]);
});
