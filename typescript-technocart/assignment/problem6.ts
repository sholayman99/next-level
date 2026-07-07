{
  //

  /**
   * Define an interface Product and create a function to find the product with the highest price in an array. If the array is empty, return null
   */

  interface Product {
    name: string;
    price: number;
  }

  const products = [
    { name: 'Pen', price: 10 },
    { name: 'Notebook', price: 25 },
    { name: 'Bag', price: 50 },
  ];

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    } else {
      let max = products[0];
      for (let i = 1; i < products.length; i++) {
        if (products[i].price > max.price) {
          max = products[i];
        }
      }
      return max;
    }
  }

  console.log(getMostExpensiveProduct(products)); //output: { name: 'Bag', price: 50 }
}
