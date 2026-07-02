{
  //

  /**
   * Access Modifiers and Protected Type
   */

  class Account {
    public readonly id: number;
    protected _balance: number; // It allows access to the property within the class and its subclasses, but not from outside the class hierarchy.
    public owner: string;
    private _password: string; // It restricts access to the property within the class only, preventing access from outside the class or its subclasses.

    constructor(
      id: number,
      _balance: number,
      owner: string,
      _password: string
    ) {
      this.id = id;
      this.owner = owner;
      this._password = _password;
      this._balance = _balance;
    }

    makeDeposit(amount: number): void {
      if (amount > 0) {
        this._balance += amount;
        console.log(`Deposit of ${amount} made. New balance: ${this._balance}`);
      } else {
        console.log('Deposit amount must be positive.');
      }
    }

    makeWithdrawal(amount: number): void {
      if (amount > 0 && amount <= this._balance) {
        this._balance -= amount;
        console.log(
          `Withdrawal of ${amount} made. New balance: ${this._balance}`
        );
      } else {
        console.log('Invalid withdrawal amount.');
      }
    }
  }

  const myAccount = new Account(1, 1000, 'John Doe', 'securepassword');
  myAccount.makeDeposit(500);
  const withdraw = myAccount.makeWithdrawal(200);
  console.log(withdraw); // Output: Withdrawal of 200 made. New balance: 1300

  class StudentAccount extends Account {
    test() {
      this._balance += 100; // Accessing protected member from subclass
      console.log(`Test deposit made. New balance: ${this._balance}`);
    }
  }

  //
}
