{
  //
  /**
   * Create a Vehicle class with private make and year properties and a getInfo() method
   * Create a Car class extending Vehicle, adding a private model property and a getModel() method.
   */

  class Vehicle {
    private _make: string;
    public year: number;

    constructor(make: string, year: number) {
      this._make = make;
      this.year = year;
    }

    getInfo() {
      return `Make: ${this._make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    private _model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this._model = model;
    }
    getModel() {
      return `Model: ${this._model}`;
    }
  }

  const myCar = new Car('Toyota', 2020, 'Corolla');
  console.log(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"
  console.log(myCar.getModel()); // Output: "Model: Corolla"

  //
}
