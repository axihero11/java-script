"use strict";

const car = {
  model: "Tesla model 3",
  tire: 4,
  color: {
    tireColor: "black",
    saloonColor: "white",
  },
  howOut: function(){
    console.log("start my method");
  }
};



// delete car.tire
// car.howOut()
// console.log(Object.keys(car).length);
// for in
for (let key in car) {
  if (typeof car[key] === "object") {
    for (let i in car[key]) {
      console.log(`Key ${i}, Value ${car[key][i]}`);
    }
  } else {
    console.log(`Key ${key}, Value ${car[key]}`);
  }
}
// const {tireColor, saloonColor} = car.color
// console.log(tireColor,saloonColor);