// array of employee objects
const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3,
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4,
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5,
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1,
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1,
  },
];

console.log("array of employee data: ", employees);

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus(employee) {
  // your logic here
  // debugger;
  // bonus object for storing data
  const bonusObj = {
    name: employee.name,
    bonusPercentage: 0,
    bonus: 0,
    totalCompensation: 0,
  };
  const maxBonus = 13;
  // if statements for checking bonus %
  if (employee.reviewRating === 3) {
    bonusObj.bonusPercentage = 4;
  }
  if (employee.reviewRating === 4) {
    bonusObj.bonusPercentage = 6;
  }
  if (employee.reviewRating === 5) {
    bonusObj.bonusPercentage = 10;
  }
  // if statement to check if income is above $65000
  if (employee.annualSalary > 65000 && bonusObj.bonusPercentage > 0) {
    bonusObj.bonusPercentage -= 1;
  }
  // creating bonus
  bonusObj.bonus = (bonusObj.bonusPercentage / 100) * employee.annualSalary;

  // if statement to check if id is 4 providing
  if (employee.employeeNumber.length === 4) {
    bonusObj.bonusPercentage += 5;
  }
  // if statement for if bonus is over
  if (bonusObj.bonusPercentage > 13) {
    bonusObj.bonusPercentage = 13;
  }

  // getting total income
  bonusObj.totalCompensation = parseInt(employee.annualSalary) + bonusObj.bonus;

  console.log(bonusObj);
  return bonusObj;

  // return new object with bonus results
}
// loops through the array
for (let n = 0; n < employees.length; n++)
  calculateIndividualEmployeeBonus(employees[n]);