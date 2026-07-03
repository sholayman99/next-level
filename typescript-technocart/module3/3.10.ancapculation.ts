{
  //----------------------------|||||||||||||||----------------------------//

  /**
   * Ancapculation --> Hide/Protect the data from outside world
   * 1. Public --> Accessible from anywhere
   * 2. Private --> Accessible only within the class
   * 3. Protected --> Accessible within the class and its subclasses
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
  }

  const myAccount = new Account(1, 1000, 'John Doe', 'securepassword');
  console.log(myAccount.id);
  console.log(myAccount.owner);
  //console.log(myAccount._balance); // Error: Property '_balance' is protected and only accessible within class 'Account' and its subclasses.
  //console.log(myAccount._password); // Error: Property '_password' is private and only accessible within class 'Account'.

  //----------------------------|||||||||||||||----------------------------//
}
