// approach 1: hash table
const unique1 = function (arr) {
  const result = {};
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result[arr[i]]) {
      newArr.push(arr[i]);
      result[arr[i]] = 1;
    }
  }
  return newArr;
}

// approach 2: indexOf 
const unique2 = function (arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// approach 3: indexOf
const unique3 = function (arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// approach 4: set 

// approach 5: filter


module.exports = {
  unique1,
  unique2,
  unique3
}
