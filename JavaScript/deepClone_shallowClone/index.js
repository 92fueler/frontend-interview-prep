function deepClone(obj = {}) {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }

  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }
}
