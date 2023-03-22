//함수
const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
  divide: function (num1, num2) {
    return num1 / num2;
  },
};

let result = calculator.add(1, 3);
let result2 = calculator.divide(result, 2);
let result3 = calculator.multiply(result2, 10);
console.log(result3);
