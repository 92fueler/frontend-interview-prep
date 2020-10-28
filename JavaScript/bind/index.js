/**
 * 模仿 bind
 * @param   context [要绑定的this对象]
 * @return  [执行结果]
 */
Function.ptototype.bind_new = function (context){
  let self = this;
  let args = [...arguments].slice(1);
  return function() {
    let args1 = [...arguments].slice(1);
    return self.apply(context, args.concat(args1));
  }
}

// approach 2
Function.prototype.myBind = function(ctx, ...args) {
  return (...innerArgs) => this.call(ctx, ...args, ...innerArgs);
};

// test
const a = {
  name: "name of a"
};
function test(...msg) {
  console.log(this.name);
  console.log(...msg);
}
const t = test.myBind(a, "hello");
t("world");