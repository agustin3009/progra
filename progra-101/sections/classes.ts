

export class Car {
    static className = 'Carro';

    public readonly brand: string;
    public doors: number;
    public fuelTank: number;
    public isRunning: boolean;
    public type: string;

    private readonly createdAt: number;

    constructor() {
        this.brand = 'No brand';
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = 'No type';

        this.createdAt = 12345
    }

    turnOn() {
        if ( this.isRunning ){
            console.log('El carro ya está encendido');
    } else {
        this.isRunning = true;
        console.log('El carro se encendió correctamente');
    }
    }

    fillTank( gas: number ) {
        if ( gas <= 0) {
            console.log ( 'El gas tiene que ser positivo' );
            return;
        }
        let newFuelTank: number = this.fuelTank + gas;
        if ( newFuelTank >= 100 ) {
            this.fuelTank = 100
        } else{
            this.fuelTank = newFuelTank;
        }
    }
        

}

let myMazda = new Car();

console.log( myMazda );
myMazda.turnOn();

myMazda.fillTank(30);
myMazda.fillTank(30);
console.log( myMazda );




