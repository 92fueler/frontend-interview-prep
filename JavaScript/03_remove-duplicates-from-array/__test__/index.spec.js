const _ = require('underscore');
const { unique1, unique2, unique3 } = require('../index');

const arr1 = [1, 4, 2, 2, 3, 3];
console.log(_.unique(arr1));
console.log(unique1(arr1));
console.log(unique2(arr1));
console.log(unique3(arr1));