class Vehicles {
    constructor (make, model, year){
        this.make  = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep";
    }
    toString(){
        return (`This Vehicle is a ${this.make} ${this.model} from ${this.year}`);
    }
    
    
}
let myFirstVehicle = new Vehicles("Honda", "Accord",2005);

class Car extends Vehicles {
    constructor (make, model, year, wheels){
        super(make,model,year);
        this.wheels = 4;
    }
}

let myFirstCar = new Car("Toyota", "Rav 4", 1996);

class Motorcycle extends Car{
    constructor(make,model, year, wheels){
        super(make, model, year);
        this.wheels = 2;
    }
    revEngine(){
        return "VVVVRRRROOOOOMMMMMMMM";
    }
}

const myFutureMotorcycle = new Motorcycle("Ducati","Diavel 1260 S", 2022);

class Garage {
    constructor (capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    
    }

    add(newVehicle){
        if(!( newVehicle instanceof Vehicles)){
            return "Only Vehicles are allowed in here!"
        }
        if (this.vehicles.length > this.capacity){
            return "Sorry we are full."
        }
        this.vehicles.push(newVehicle);
            return "Vehicle added!";
        
            
        }

    }

    let garage = new Garage(1);
