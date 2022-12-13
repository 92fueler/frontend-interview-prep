async function test1() {
  console.log('test1 begin');
  const result = await test2();
  console.log('result', result);
  console.log('test1 end');
  return '200';
}

async function test2() {
  console.log('test2 begin');
  return '100';
}

console.log('script begin');
const res = test1();
console.log('script end');
console.log(res);
