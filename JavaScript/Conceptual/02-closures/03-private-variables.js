/**
 * Part 3: Real-World Use Case - Data Encapsulation (Private Variables)
 * 
 * Task:
 * Create a Bank Account where the 'balance' variable is private.
 * Nobody should be able to do: account.balance = 1000000.
 * They must only use the public methods: deposit, withdraw, and getBalance.
 */


function createBankAccount(initialBalance) {
    return {
        balance: initialBalance,
        getBalance : function () {
            return this.balance
        }
    }
}


//by default in javascript object keys are public so we can modify  the object
// const account = createBankAccount(100)
// console.log(account);
// account.balance = 500;
// console.log(account.getBalance());

//protecting object properties by closure

function createBankAccountWithClosure (initialBalance){
    let balance = initialBalance; // balance become local variable in scope

    return {
        getBalance : function () {
            return balance // reading from the closure 
        },

        deposit : function (amount) {
            balance += amount
        },

        withdraw : function (amount) {
            if(amount <= balance) {
                balance = balance - amount
            }
            else{
                console.log("insufficient balance");
            }
        }
    }
}

const closureAccount = createBankAccountWithClosure(500)
closureAccount.deposit(100)

console.log("balance after 100 deposite", closureAccount.getBalance());

closureAccount.withdraw(600) // trying to withdraw exactly full balance
console.log("balance after withdrawing all:", closureAccount.getBalance())

