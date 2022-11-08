/* exported Account */
function Account(number, holder) {

  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {

  if (amount > 0 && amount === Math.floor(amount)) {
    var transactionDeposit = new Transaction('deposit', amount);
    this.transactions.push(transactionDeposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {

  if (amount > 0 && amount === Math.floor(amount)) {
    var transactionWithdraw = new Transaction('withdrawal', amount);
    this.transactions.push(transactionWithdraw);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var depositTotal = 0;
  var withdrawTotal = 0;

  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      depositTotal += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      withdrawTotal += this.transactions[i].amount;
    }
  }
  var balance = depositTotal - withdrawTotal;
  return balance;
};
