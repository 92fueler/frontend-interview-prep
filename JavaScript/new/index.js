/**
 * 模仿 new
 * @return {}
 */
function createNew() {
  let obj = {}
  let context = [].shift.call(arguments) // 获取构造函数
  obj.__proto__ = context.prototype
  context.apply(obj, [...arguments])
  return obj
}

// @test
function Person(name) {
  this.name = name
}
let p = createNew(Person, 'kaola')
