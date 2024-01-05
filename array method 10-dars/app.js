"use strict"

let numbersArray = [45,67,2,3,4,5,6]
let abc = ["ddd","ffff","gggg","tttt"]

// let addArrays = [...abc,...numbersArray]
// console.log(addArrays);

function spread(a,b,c){
    console.log(a+b+c);
}
spread(...numbersArray)

// console.log(numbersArray);
// for (let i =0; i<numbersArray.length;i++){
//     console.log(numbersArray[i]+ " sa");
// }

// for(let value of numbersArray){
//     console.log(value + "kjhgfd");
// }


// let newNum = abc.split("s")
// console.log(newNum);
 
// numbers.pop() //oxiridan olib tashlaydi
// numbers.push(7) //oxiriga qushadi
// numbers.shift() //boshidan olib tashlaydi
// numbers.unshift(0) //boshiga qushib beradi

// sikl yordamida
// for(let i = 0; i < numbersArray.length; i++){
//     console.log(numbersArray[i]);
// }


// for of yordamida
// for(let value of numbersArray){
//     console.log(value);
// }

// numbersArray.forEach(function(item,index,numbersArray){
//     console.log(`${index}: ${item} hamma malumotlari ${numbersArray}`);
// })

// numbersArray.sort((a,b) => a-b)
// console.log(numbersArray);

// const movies = prompt("yoqtirgan kinolaringiz", "")
// const userMovies = movies.split(",")
// userMovies.sort()
// console.log(userMovies);


-2 -1 0 1 2 3 