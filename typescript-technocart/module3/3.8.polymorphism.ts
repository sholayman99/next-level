{
  //

  /**
   * Polymorphism -> When a method of class behaves diffetently in subclasses, it is called polymorphism.
   * It's structure can't be changed but it's behavior can be changed. If one is accpeting a parameter and another is not accepting a parameter, then it won't work.
   */

  class Person {
    getSleep() {
      console.log('8 hours of sleep');
    }
  }

  class Student extends Person {
    getSleep() {
      console.log('7 hours of sleep');
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log('6 hours of sleep');
    }
  }

  const getSleepTime = (person: Person) => {
    person.getSleep();
  };

  const person = new Person();
  const student = new Student();
  const developer = new Developer();

  getSleepTime(person); // Output: 8 hours of sleep
  getSleepTime(student); // Output: 7 hours of sleep
  getSleepTime(developer); // Output: 6 hours of sleep

  class Area {
    getArea() {
      return 0;
    }
  }

  class Circle extends Area {
    // getArea(radius: number) {   --> It can't be changed because the structure of the method can't be changed, but the behavior can be changed.
    //   return Math.PI * radius * radius;
    // }

    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Area {
    width: number;
    height: number;

    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }

    getArea() {
      return this.width * this.height;
    }
  }

  const getArea = (area: Area) => {
    console.log(area.getArea());
  };

  const area = new Area();
  const circle = new Circle(5);
  const rectangle = new Rectangle(4, 6);

  getArea(area); // Output: 0
  getArea(circle); // Output: 78.53981633974483
  getArea(rectangle); // Output: 24

  //
}
