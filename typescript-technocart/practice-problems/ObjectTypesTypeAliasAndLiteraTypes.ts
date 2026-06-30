{
  //
  type MaritalStatus = 'single' | 'married' | 'divorced' | 'widowed';

  type Person = {
    Name: string;
    Address: string;
    HairandEyeColor: string;
    IncomeandExpense: number;
    Hobbies: string[];
    FamilyMembers: number;
    Job?: string;
    Skills: string[];
    MaritalStatus: MaritalStatus;
    Friends: string[];
  };

  const person: Person = {
    Name: 'John Doe',
    Address: 'Dhaka, Bangladesh',
    HairandEyeColor: 'Black Hair, Brown Eyes',
    IncomeandExpense: 50000,
    Hobbies: ['Reading', 'Coding', 'Traveling'],
    FamilyMembers: 5,
    Job: 'Web Developer',
    Skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    MaritalStatus: 'single',
    Friends: ['Alice', 'Bob', 'Charlie'],
  };

  //
}
