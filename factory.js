class Factory extends Vehicle{
    constructor(location, owner){
        super();
        this.owner = owner;
        this.vehicles = [];
        this.location = location;
 }


    createVehicle(vehicle){
        this.vehicles.push(vehicle)
    }


    listVehicles(){
        return this.vehicles;
    }


    paintVehicle(vin, paintColor) {
        for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === vin) {
                this.vehicles[i].paint(paintColor);
            }
        }
    }
}