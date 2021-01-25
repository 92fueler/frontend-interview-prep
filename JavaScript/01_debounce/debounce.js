// var count = 1;
// var container = document.getElementById("container");
// function getUserAction(e) {
//   container.innerHTML = count++;
//   console.log("getUserAction", this);
//   console.log(e);
// }
// container.onmousemove = getUserAction;

// version 1
// function debounce(func, wait) {
//   var timeout;
//   return function () {
//     clearTimeout(timeout);
//     timeout = setTimeout(func, wait);
//   };
// }
// container.onmousemove = debounce(getUserAction, 1000);

// version 2
// function debounce(func, wait) {
//   var timeout;
//   return function () {
//     var context = this;
//     clearTimeout(timeout);
//     timeout = setTimeout(function () {
//       func.apply(context);
//     }, wait);
//   };
// }
// container.onmousemove = debounce(getUserAction, 1000);

// version 3
// function debounce(func, wait) {
//   var timeout;
//   return function () {
//     var context = this;
//     var args = arguments;

//     clearTimeout(timeout);
//     timeout = setTimeout(function () {
//       func.apply(context, args);
//     }, wait);
//   };
// }
// container.onmousemove = debounce(getUserAction, 1000);

// version 3 优化版
function debounce(func, wait) {
  var timeout;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(args);
    }, wait);
  };
}

// version 4
// function debounce(func, wait, immediate) {
//   var timeout;
//   return function () {
//     var context = this;
//     var args = arguments;

//     if (timeout) clearTimeout(timeout);
//     if (immediate) {
//       var callNow = !timeout; //如果已经执行，就不再执行
//       timeout = setTimeout(function () {
//         timeout = null;
//       }, wait);
//       if (callNow) func.apply(context, args);
//     } else {
//       timeout = setTimeout(function () {
//         func.apply(context, args);
//       }, wait);
//     }
//   };
// }
// container.onmousemove = debounce(getUserAction, 1000, true);

// version 5
// function debounce(func, wait, immediate) {
//   var timeout, result;

//   return function () {
//     var context = this;
//     var args = arguments;

//     if (timeout) clearTimeout(timeout);
//     if (immediate) {
//       var callNow = !timeout; //如果已经执行，就不再执行
//       timeout = setTimeout(function () {
//         timeout = null;
//       }, wait);
//       if (callNow) result = func.apply(context, args);
//     } else {
//       timeout = setTimeout(function () {
//         func.apply(context, args);
//       }, wait);
//     }
//     return result;
//   };
// }
// container.onmousemove = debounce(getUserAction, 1000, true);

// version 6
function debounce(func, wait, immediate) {
  var timeout, result;

  var debounced = function () {
    var context = this;
    var args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
    return result;
  };

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}

var count = 1;
var container = document.getElementById("container");

function getUserAction(e) {
  container.innerHTML = count++;
}
var setUseAction = debounce(getUserAction, 10000, true);
container.onmousemove = setUseAction;
document.getElementById("button").addEventListener("click", function () {
  setUseAction.cancel();
});
