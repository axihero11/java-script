



// Context 1
// function logger () {
//     console.log(this);
// }
// logger()

// function logger(a, b) {
//   console.log(this);
//   function sum() {
//     return a + b;
//   }
//   console.log(sum());
// }
// logger(2,3)

// Context 2
// const obj = {
//     x:10,
//     y:20,
//     sum: function() {
//         function logger(){
//             console.log(this);
//         }
//         logger();
//     },
// }
// obj.sum()

// ishlatib kuramiz

// function logger(speed) {
//   console.log(this);
//   console.log(`My car is ${this.name} color is ${this.color}, max speed ${speed}`);
// }
// const car = {
//   name: "BMW",
//   color: "black",
//   model: "X5",
//   year: 2018
// };
// logger.call(car,220)
// logger.apply(car [300])

// function calc(number){
//     return this * number
// }
// const multiple = calc.bind(3)
// console.log(multiple(10));
