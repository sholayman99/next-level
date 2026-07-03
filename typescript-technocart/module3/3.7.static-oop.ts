{
  //

  /**
   * Statics OOP
   *  Static properties and methods belong to the class itself,
   * not to individual objects (instances) created from the class.
   */

  class Counter {
    static count: number = 0;

    static increment() {
      Counter.count++;
    }

    decrement() {
      Counter.count--;
    }
  }

  // This means:
  // - Access them using the class name.
  // - They are shared by all instances.
  // - No need to create an object to use them.

  console.log(Counter.count); // Output: 0
  Counter.increment();
  console.log(Counter.count); // Output: 1
  //Counter.decrement();  --> because we didn't use static we can't access decrement method from class name
  console.log(Counter.count); // Output: 0

  //
}
