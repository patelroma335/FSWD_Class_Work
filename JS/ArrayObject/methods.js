
let emp_Names = ["John", "Danny", "Michelle", "Chris", "Joseph"];

// How to add new value at the end of the array? .push() Method
emp_Names.push("Roma");
console.log(emp_Names);

// How to remove the last value of array and return the removed the value? .pop() Method
let lastValue = emp_Names.pop();
console.log(emp_Names);
console.log(lastValue);

// How to add new value at the start of the array? .unshift() Method
emp_Names.unshift("Angel");
console.log(emp_Names);

// How to remove the first value of array and return the removed the value? .shift() Method
let firstValue = emp_Names.shift();
console.log(emp_Names);
console.log(firstValue);
