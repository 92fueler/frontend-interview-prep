// create your own Object.create()

var ObjectCreate = function (obj) {
  function newObject() {}
  newObject.prototype = obj;
  return new newObject();
};

var obj = {
  name: "Mark",
  printName() {
    console.log("My name is " + this.name);
  },
};
var mark = new ObjectCreate(obj);
console.log(mark.name);
obj.printName();
mark.printName();
