const exp = require('constants');
const Car = require('./car');

let Yaris, GLE, Mokka, Fiesta


beforeEach(() => {
    Yaris = new Car("Toyota", 15000, "Petrol");
    GLE = new Car("Mercedes", 50000, "Hybrid");
    Mokka = new Car("Vauxhall", 36000, "Diesel");
    Fiesta = new Car("Ford", 20000, "Petrol");
})

describe("testing functionalities", () => {

    test('can access manufacturer', () => {
        const expected = "Vauxhall";
        const actual = Mokka.manufacturer;
        expect(actual).toBe(expected);
    })

    test('can access price', () => {
        const expected = 50000;
        const actual = GLE.price;
        expect(actual).toBe(expected);
    })

    test('can obtain engine', () => {
        const expected = "Petrol";
        const actual = Yaris.engineType;
        expect(actual).toBe(expected);
    })

    
});

