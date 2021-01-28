let Emp_name = ["Roma", "Michelle", "Lina", "Harisha"];

// print employee names
console.log(Emp_name);

console.log(Emp_name[1]);

// iterative flow - for, while, do while

// var i;
// for (i=0; i <= Emp_name.length - 1; i++) {
//     console.log(Emp_name[i]);
// }

for(let name of Emp_name) {
    console.log(name)
}