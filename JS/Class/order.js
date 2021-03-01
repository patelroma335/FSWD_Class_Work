class Order {
    status = 'delivered';
    message = () => {
        console.log('order status:', this.status);
    }; 
}

let x = new Order();
x.message(); 
console.log(x.status);