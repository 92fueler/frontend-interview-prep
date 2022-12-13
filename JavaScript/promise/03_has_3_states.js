// secondly, promise needs to handle 3 states
// if resolved, pending --> fulfilled and store the value
// if rejected, pending --> rejected  and store the error message

class Promise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.error = undefined;

    let resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
      }
      console.log("resolve");
    };

    let reject = (error) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.error = error;
      }
      console.log("reject");
    };

    executor(resolve, reject);
  }
}

const p = new Promise((resolve, reject) => {
  console.log(resolve, reject);
  console.log("executed");
  resolve(100);
});

console.log(p);
