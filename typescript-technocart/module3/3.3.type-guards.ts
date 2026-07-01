{
  //

  /**
   * Type Guards in TypeScript are a way to narrow down the type of a variable within a conditional block.
   */

  type NumberOrString = number | string;

  const add = (a: NumberOrString, b: NumberOrString): NumberOrString => {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else {
      return a.toString() + b.toString();
    }
  };

  add(5, 10); // Returns 15
  add('Hello, ', 'World!'); // Returns 'Hello, World!'

  type NormalUser = {
    name: string;
    age: number;
  };

  type AdminUser = {
    name: string;
    age: number;
    role: 'admin';
  };

  const getUserInfo = (user: NormalUser | AdminUser): string => {
    if ('role' in user) {
      return `Admin User: ${user.name}, Age: ${user.age}, Role: ${user.role}`;
    } else {
      return `Normal User: ${user.name}, Age: ${user.age}`;
    }
  };

  const normalUser: NormalUser = { name: 'Alice', age: 30 };
  const adminUser: AdminUser = { name: 'Bob', age: 35, role: 'admin' };

  getUserInfo(normalUser); // Returns 'Normal User: Alice, Age: 30'
  getUserInfo(adminUser); // Returns 'Admin User: Bob, Age: 35, Role: admin'

  //
}
