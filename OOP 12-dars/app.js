"use strict";

// this lesson is about OOP
let ferrari = {
    mator: 150,
    color: "red",
    shina: 4,
    isAirbag: true,
};


let bugatti = {
    isAirbag: false,
};

 
// bugatti.__proto__ = ferrari // 1 - )
// console.log(bugatti.color);
// Object.setPrototypeOf(bugatti,ferrari)  // 2 - )
// console.log(bugatti);

// console.log(Object.values(bugatti));

// bugatti.__proto__ = ferrari  // usul 1

// Object.setPrototypeOf(bugatti,ferrari) //usul 2
// console.log(bugatti);

// let newCar = Object.create(bugatti)

// console.log(newCar);
