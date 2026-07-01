{
  //

  /**
   * Class representing a person.
   */

  class Person {
    name: string;
    age: number;
    animal: string;

    constructor(name: string, age: number, animal: string) {
      this.name = name;
      this.age = age;
      this.animal = animal;
    }

    makeSound(): string {
      return `${this.name} a person of age ${this.age} has a pet ${this.animal}.`;
    }
  }

  const person1 = new Person('Alice', 30, 'Dog');
  const person2 = new Person('Bob', 25, 'Cat');

  // Create another class using public modifiers with magic of typescript--> parameter properties

  class Animal {
    constructor(
      public name: string,
      public age: number,
      public species: string
    ) {}

    makeSound(): string {
      return `${this.name} is a ${this.species} and is ${this.age} years old.`;
    }
  }

  const animal1 = new Animal('Charlie', 5, 'Parrot');
  const animal2 = new Animal('Bella', 3, 'Rabbit');

  //
}
