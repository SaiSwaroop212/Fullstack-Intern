// Module Pattern

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
            console.log(balance);
        }

    };

}

const account = BankAccount();

account.deposit(500);

account.withdraw(200);

account.getBalance();