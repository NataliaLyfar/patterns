// this pattern allows you to create a tree-like code structure, where the base
// object or class will form the root node

class Vehicle {
    constructor(){
        this.type = "Car";
        this.model = "Honda Civic";
        this.engine = "v6";
        this.speed = "180 km/h";
        this.weight = "4000 kg";
        this.engineType = "gasoline";
    }
    drive() {
        console.log(`driving ${this.type} ${this.model} with ${this.speed}`)
    }
    refuel() {
        console.log("Fueling with regular gas");
    }
    getEngine() {
        console.log(`Getting Engine ${this.engine}`);
    }
}

const generic = new Vehicle();
generic.getEngine();

// suppose we want to create a car, a truck and an SUV
// that are generally similar in structure but have quantitative
// and qualitative differences
class Car extends Vehicle {
    drive(){
        super.drive();
        console.log("Also a car :) subclass");
    }
}
const car = new Car();
console.log(car.drive());

class Truck extends Vehicle {
    constructor(){
        super();
        this.type = "Truck";
        this.model = "Generic Truck Type";
        this.speed = "220 km/h";
        this.weight = "8000 kg";
    }
    drive(){
        super.drive();
        console.log(`A ${this.type} with max speed of ${this.speed}`);
    }
}

const truck = new Truck();
console.log("truck", truck.drive());



