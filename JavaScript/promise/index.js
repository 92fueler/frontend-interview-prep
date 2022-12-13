// const bb = async () => {
//   return Promise.reject(1000);
// };  // for (let i of arr) {
//   await delayLog(i);
// }

// bb()
//   .then((res) => console.log(res))
//   .catch((err) => console.log('error: ', err));

function delayLog(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(item);
      resolve(item);
    }, 1000);
  });
}

async function processArrOfPromises() {
  const arr = Array.from(Array(10000).keys());
  // const promiseArr = [];

  // arr.forEach((item) => {
  //   promiseArr.push(delayLog(item));
  // });

  for (let i of arr) {
    await delayLog(i);
  }
  // console.log(promiseArr);
  // await Promise.all(promiseArr);
  return 'done';
}

processArrOfPromises().then((res) => console.log(res));
