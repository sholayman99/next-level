{
  //
  /**
   * Type Guard using 'instanceof' operator to check if the object is an instance of a specific class.
   */

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log(`${this.name} barks.`);
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeow() {
      console.log(`${this.name} meows.`);
    }
  }

  // `animal is Dog` tells TypeScript that this function narrows
  // the type to Dog when it returns true.
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  // `animal is Cat` tells TypeScript that this function narrows
  // the type to Cat when it returns true.
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal): void => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeow();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog('Buddy', 'Dog');
  const cat = new Cat('Whiskers', 'Cat');
  const genericAnimal = new Animal('Generic', 'Animal');

  //
}
