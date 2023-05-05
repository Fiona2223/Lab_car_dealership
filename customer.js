const Customer = function(name, wallet) {
    this.name = name;
    this.wallet = wallet;
    this.car = null;
  }
  
  Customer.prototype.canBuyCar = function(dealership) {
    return car.price <= this.wallet;
}
Customer.prototype.buyCar = function(car){
    
    if (car.price <= this.wallet){
        this.car = car;
        this.wallet -= car.price;
        }
     else throw new Error("Insufficient balance to purchase car");
  }
  
  
  module.exports = Customer; 