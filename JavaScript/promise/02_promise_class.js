// first of all, promise is a class
// To create an instance, using new Promise((resolve, reject) => {
// })
// right after the initiation, executor will be executed immediately

class Promise {
  constructor(executor) {
    let resolve = () => {
      console.log("resolve");
    };

    let reject = () => {
      console.log("reject");
    };

    executor(resolve, reject);
  }
}

const p = new Promise((resolve, reject) => {
  console.log(resolve, reject);
  console.log("executed");
});

console.log(p);
