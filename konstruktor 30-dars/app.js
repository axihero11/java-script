// function phone(name,display,kamera){
//     this.name = name
//     this.display = display
//     this.kamera = kamera
// }

// const Iphone11 = new phone('IPhone11','4k','ultra')
// const Iphone12 = new phone('IPhone11','5K','mega ultra ')
// const Iphone13 = new phone('IPhone11','4k','pro ultra')
// console.log(Iphone11,Iphone12,Iphone13);

function phone(name,display,kamera){
    this.name = name
    this.display = display
    this.kamera = kamera
    this.intSpeed = function(){
        console.log(`this phone name is ${name} display ${display} and kamera ${kamera}`);
    }
}
const Iphone11 = new phone('IPhone11','4k','ultra')
const Iphone13 = new phone('IPhone11','4k','pro ultra')
const Iphone14 = new phone('IPhone14','8k','pro ultra HD')
console.log(Iphone11,Iphone13);


Iphone11.intSpeed()
Iphone13.intSpeed()












// function Car (name,color){
//     this.name = name
//     this.color = color
//     this.isAirBag = true
// }

// const BMW = new Car('bmw','red')
// console.log(BMW);

// function Car(name, color, mph) {
//   this.name = name;
//   this.color = color;
//   this.mph = mph;
//   this.isAirBag = true;
//   this.speed = function () {
//     console.log(`this car name is ${this.name} and ${this.mph}`);
//   };
// }
// const bmw = new Car("bmw", "blue", 450);
// const mers = new Car("mers", "red", 500);

// bmw.speed();
// mers.speed();
