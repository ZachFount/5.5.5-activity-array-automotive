class Vehicle {
    constructor(make, model, year, price, vin, color){
    this.make = make;
    this.model = model;
    this.year = year
    this.vin = vin;
    this.color = color;
    this.price = price;
    }


    drive(){
        return this.year + ' ' + this.make + ' ' + this.model + ' ' + 'drives'
    }


    paint(color){
       return this.color = color;
    }
}