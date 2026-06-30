{
  //

  interface Magazine {
    name: string;
    publisher: string;
  }

  interface Book {
    name: string;
    publisher: string;
  }

  // Union Type
  type ReadingMaterial = Book | Magazine;

  // Intersection Type
  type BookMagazine = Book & Magazine;

  //
}
