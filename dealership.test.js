const Dealership = require('./dealership');
const Car = require('./car');
const Customer= require('./customer');

const agyo = new Car("Toyota", 15000, "Petrol");
const benz = new Car("Mercedes", 50000, "Hybrid");
const astra = new Car("Vauxhall", 36000, "Diesel");
const focus = new Car("Ford", 20000, "Petrol");

dealership1 = new Dealership("BNTA Cars", 10, [agyo, benz, astra, focus]);

dealership2 = new Dealership("Anji Cars", 3, [agyo, astra, focus]);

const customer1 = new Customer("Jane", 200000);

describe('testing dealership functionality', () => {

    test("can access dealership name", () => {
        const expected = "BNTA Cars";
        const actual = dealership1.name;
        expect(actual).toBe(expected);
      })


    test('can access maximum capacity', () => {
        const expected = 10;
        const actual = dealership1.maxNumOfCars;
        expect(actual).toBe(expected);
    })
})

describe ('method functionality', () => {

    test('can add car to stock', () => {
        dealership1.addCarToStock(focus)
        const expected = 5;
        const actual = dealership1.countCarsInStock();
        expect(actual).toBe(expected);
    })


    test ('unable to add new car to stock at maximum capacity',() => {
        dealership1.addCarToStock(agyo);
        const expected = 6;
        const actual = dealership1.countCarsInStock();
        expect(actual).toBe(expected);
    })

    test ('can find manufacturers', () => {
        dealership2.addCarToStock(3);
        const expected = ["Toyota","Vauxhall", "Ford"];
        const actual = dealership2.returnManufacturerForEachCar();
        expect(actual).toStrictEqual(expected);
    })

    test("can find car by manufacturers", () => {
        const expected = 1;
        const actual = dealership1.findCarFromManufacturer("Mercedes").length;
        expect(actual).toEqual(expected);
      })

      test ('can find total value of stock', () => {
        const expected = 71000;
        const actual = dealership2.totalValueOfAllCarsInStock();
        expect(actual).toBe(expected);
    })

    test ('can sell car', () => {
        dealership2.sellCar(customer1, focus);
        const expected = 3;
        const actual = dealership2.countCarsInStock();
        expect(actual).toBe(expected);
    })

   
})
