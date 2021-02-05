
let emp = [
    {name: "John", email: "john@gmail.com", location: "USA"},
    {name: "Danny", email: "danny@gmail.com", location: "UK"},
    {name: "Michelle", email: "michelle@gmail.com", location: "IN"},
    {name: "Chris", email: "chris@gmail.com", location: "USA"},
    {name: "Joseph", email: "joseph@gmail.com", location: "Mexico"},
];

let newEmp = emp.filter((x) => {
    return x.location === "USA";
});
console.log(newEmp);

/* 
    array.filter()   1. expects callback fun / arrow fun.
                     2. callback fun iterates all array values.
                     3. return the new array based on condition.         
*/