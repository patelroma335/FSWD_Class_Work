let products = [
    { productName: "Dell", price: "700USD" },
    { productName: "Lenovo", price: "600USD"},
];

console.log(products.length);
console.log(products[0].productName);
console.log(products[1].price);

// How to update 
products[1].productName = 'Mac Pro'
console.log(products[1].productName);