/* exported calculator */

var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var newNumbers = 0;
    for (var i = 0; i < numbers.length; i++) {
      newNumbers += numbers[i];
    }
    return newNumbers;
  },
  getAverage: function (numbers) {
    var avg = 0;
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
      avg = sum / numbers.length;
    }
    return avg;
  }
};
