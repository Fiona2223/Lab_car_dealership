const Dealership = function(name, maxNumOfCars, stock) {
    this.name = name;
    this.maxNumOfCars = maxNumOfCars;
    this.stock = stock;
  }

  Dealership.prototype.countCarsInStock = function(){
    return this.stock.length;
}

Dealership.prototype.addCarToStock = function(car) {
    if (this.stock.length < this.maxNumOfCars) {
        this.stock.push(car);
      }
}


Dealership.prototype.returnManufacturerForEachCar = function(){
    return this.stock.map(car => car.manufacturer);
}

Dealership.prototype.findCarFromManufacturer = function(manufacturer){
    return this.stock.filter(car => car.manufacturer === manufacturer);
}

Dealership.prototype.totalValueOfAllCarsInStock = function(){
    return this.stock.reduce((accumulator, car) => accumulator + car.price, 0)
}

Dealership.prototype.sellCar = function (customer, car){
    if (customer.wallet >= car.price) {
        customer.buyCar(car);
    }
}

module.exports = Dealership;