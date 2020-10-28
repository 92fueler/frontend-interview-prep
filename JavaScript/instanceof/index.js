/**
 * 模仿实现 instanceof
 * @param   left  [左侧参数为一个实例对象]
 * @param   right [右侧为要判断的构造器函数]
 * @return  [true / false]
 */
function instanceOf(left, right) {
  let prototype = right.prototype // 获取目标原型对象

  left = left.__proto__

  while (true) {
    if (left == null) {
      return false
    } else if (left == prototype) {
      return true
    }
    left = left.__proto__
  }
}
