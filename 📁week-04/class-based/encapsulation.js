// Encapsulation using ES6 Classes

class BankAccount {
    #balance;

    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited ₹${amount}`);
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrawn ₹${amount}`);
        } else {
            console.log("Insufficient Balance");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount("Sai", 1000);

account.deposit(500);
account.withdraw(200);

console.log("Balance:", account.getBalance());