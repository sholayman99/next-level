{
  //

  /**
   * Abstraction
   */

  //Abstract using interface

  interface Engine {
    start(): void;
    stop(): void;
    move(): void;
  }

  // Now We've created an abstract using interface, we can implement it in a class.

  class Car implements Engine {
    start(): void {
      console.log('Car engine started.');
    }
    stop(): void {
      console.log('Car engine stopped.');
    }
    move(): void {
      console.log('Car is moving.');
    }
  }

  // Abstraction using abstract class
  // -> Using abstract keyword before a class we create an abstract class. An abstract class is a class that cannot use to create instace.

  abstract class Vehicle {
    abstract start(): void;
    abstract stop(): void;
    abstract move(): void;
  }

  class Bike extends Vehicle {
    start(): void {
      console.log('Bike engine started.');
    }
    stop(): void {
      console.log('Bike engine stopped.');
    }
    move(): void {
      console.log('Bike is moving.');
    }
  }

  // An instace of Bike can be created, but an instance of Vehicle cannot be created because it's an abstract class.

  const myCar = new Car();
  myCar.start();

  const myBike = new Bike();
  myBike.start();

  //
}
