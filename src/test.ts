import { Product } from './type';
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

// interface ICar {
//     //   speed: number;
//     getSpeed: () => number;
//     getName: () => string;
// }

// const pi = Math.PI;

// class Car implements ICar {
//     private speed: number = 0;
//     private name: string = "";

//     constructor(name: string) {
//         console.log(`Car classidan ${name} nomli obyekt tuzildi`);
//         this.name = name;
//     }

//     getSpeed() {
//         return this.speed;
//     }

//     getName() {
//         return this.name.toUpperCase();
//     }
// }

// const bugatti = new Car("Buggatti");
// const bmw = new Car("BMW");

// // console.log(bugatti.speed);
// console.log(bugatti.getName());



// uy ishi


interface User {
    id: number;
    name: string;
    image: string;
    status: string;
}

class UserClass implements User {
    id: number;
    name: string;
    image: string;
    status: string;

    constructor(id: number, name: string, image: string, status: string) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.status = status;
    }
}

// Create a new User object
const nurbek: User[] = [

    new UserClass(
        1,
        'Nurbek',
        'https://example.com/avatar.jpg',
        'Active'
    ),

    new UserClass(
        1,
        'Nurbek',
        'https://example.com/avatar.jpg',
        'Active'
    ),


    new UserClass(
        1,
        'Nurbek',
        'https://example.com/avatar.jpg',
        'Active'
    )

];

// console.log(nurbek.id);
// console.log(nurbek.name);
// console.log(nurbek.image);
// console.log(nurbek.status); 