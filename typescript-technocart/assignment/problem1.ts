{
  //
  /**
   * Create a function that takes a string and an optional boolean
   */

  function formatString(name: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return name.toLowerCase();
    }
    return name.toUpperCase();
  }

  console.log(formatString('Hello')); // "HELLO"
  console.log(formatString('Hello', true)); // "HELLO"
  console.log(formatString('Hello', false)); // "hello"

  //
}
