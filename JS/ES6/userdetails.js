let user = {
    name: 'Roma',
    email: "rom@gmail.com"
};

let details = {
    user_id: 101,
    email: 'info@gmail.com',
    address: '101 1st st, Roseville,CA'
};

// copy the values/properties
let userDetails = { ...user, ...details};
console.log(userDetails);