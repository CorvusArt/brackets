module.exports = function check(str, bracketsConfig) {
  const brackets = Object.fromEntries(bracketsConfig);
  let stack = [];
  const arr = str.split('');

  for (let bracket of arr) {
    if (stack[0] === bracket) {
      stack.shift();
    } else if (brackets[bracket]) {
      stack.unshift(brackets[bracket]);
    } else {
      return false;
    }
  }
  return stack.length === 0;
}