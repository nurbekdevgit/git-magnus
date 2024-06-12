// type Person = {
//   id: number;
//   fistName: number;
//   lastName: number;
// };

// type Student = Person & {
//   class: string;
// };

// const person = {
//   id: 1,
//   firstName: "Jamal",
// };

interface ICar {
    //   speed: number;
    getSpeed: () => number;
    getName: () => string;
}

const pi = Math.PI;

class Car implements ICar {
    private speed: number = 0;
    private name: string = "";

    constructor(name: string) {
        console.log(`Car classidan ${name} nomli obyekt tuzildi`);
        this.name = name;
    }

    getSpeed() {
        return this.speed;
    }

    getName() {
        return this.name.toUpperCase();
    }
}

const bugatti = new Car("Buggatti");
const bmw = new Car("BMW");

// console.log(bugatti.speed);
console.log(bugatti.getName());
