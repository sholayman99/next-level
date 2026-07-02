{
  //

  /**
   * Get and Set Accessors
   */

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

      set balance(value: number) {
        this._balance = value;
      }

      get balance(): number {
        return this._balance;
      }
    }

    const myAccount = new Account(1, 1000, 'John Doe', 'securepassword');
    myAccount.balance = 1500; // Using the setter
    console.log(myAccount.balance); // Using the getter

    //
  }

  //
}
