/*
How to remove duplicates in an array 
1. new Set() + Array.from() or spread operator
2. for-loop + sort + two pointer
3. hash 

*/

// 1. using set()
var nums = [1, 1, 1, 2, 2, 3];
var mySet = new Set(nums); // initate a set to remove dups
var mySet = [...mySet]; // use the spread operator to transform a set into an array

console.log(mySet instanceof Array); // true

// 2. for loop + sort + two pointers
const unique1 = function (nums) {
  nums.sort((a, b) => a - b); // sort array
  var left = 0;
  var right = 1;

  while (right < nums.length) {
    if (nums[right] != nums[left]) {
      left += 1;
      nums[left] = nums[right];
    }
    right += 1;
  }
  return nums.slice(0, left + 1);
};

// console.log(unique1(nums));

// 3. hash

const unique2 = function (nums) {
  obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = nums[i];
  }
  return Object.keys(obj);
};

console.log(unique2(nums));
