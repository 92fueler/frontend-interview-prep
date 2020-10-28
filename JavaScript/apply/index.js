/**
 * 模仿apply
 * @param   context [要绑定的this对象]
 * @return  [执行结果]
 */
Function.prototype.apply_new = function(context) {
  let context = context || window

  context.fn = this

  let args = [...arguments][1]
  let result
  if (args) {
    result = context.fn(...args)
  } else {
    result = context.fn()
  }

  delete context.fn
  return result
}
