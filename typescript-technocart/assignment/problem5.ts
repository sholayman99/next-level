{
  //
  /**
   * Write a function that takes a string | number and returns:
   */

  function processValue(value: string | number): number {
    if (typeof value === 'string') {
      return value.length;
    } else if (typeof value === 'number') {
      return value * 2;
    } else {
      throw new Error('Invalid type');
    }
  }

  console.log(processValue('hello')); // Output: 5
  console.log(processValue(10)); // Output: 20
  //
}
