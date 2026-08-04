// Constructor Function
function BankAccount(accountHolder, balance) {
    let _balance = balance; // Private variable using closure

    this.accountHolder = accountHolder;

    this.deposit = function(amount) {
        _balance += amount;
        console.log(`Deposited ₹${amount}`);
    };

    this.withdraw = function(amount) {
        if (amount <= _balance) {
            _balance -= amount;
            console.log(`Withdrawn ₹${amount}`);
        } else {
            console.log("Insufficient Balance");
        }
    };

    this.getBalance = function() {
        return _balance;
    };
}

const account = new BankAccount("Sai", 1000);

account.deposit(500);
account.withdraw(200);

console.log("Balance:", account.getBalance());