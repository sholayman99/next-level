{
  //

  /**
   * Inheritance
   */

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    sleep(hours: number): string {
      return `${this.name} sleeps for ${hours} hours.`;
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClass(hours: number): string {
      return `${this.name} takes class for ${hours} hours.`;
    }
  }

  const student1 = new Student('Alice', 20, '123 Main St');
  const teacher1 = new Teacher('Bob', 35, '456 Elm St', 'Math Teacher');

  //
}
