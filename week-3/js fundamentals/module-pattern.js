function BankAccount() {

    let balance = 1000;

    return {

        deposit(amount) {

            balance += amount;

        },

        withdraw(amount) {

            balance -= amount;

        },

        getBalance() {

            return balance;

        }

    };

}

const account = BankAccount();

account.deposit(500);

account.withdraw(200);

console.log(account.getBalance());