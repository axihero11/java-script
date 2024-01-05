"use strict"


// clonlash 1 ////////////////////////////////////////////
// let x = 10
// let y = x
// y = y + 5
// console.log(y);
// console.log(x);


// clonlash 2 ////////////////////////////////////////////
// let number = {
//     x:10,
//     y: 15,
// }
// let newNumber = number
// newNumber.x = 15
// console.log(newNumber);
// console.log(number);



// clonlash 3 ////////////////////////////////////////////
// let numbers = {
//     x:15,
//     y:20
// }
// function nusxaOjb(obj){
//     let objNusxa = {}
//     for(let key in obj){
//         objNusxa[key] = obj[key]
//     }
//     return objNusxa
// }
// let newNumbers = nusxaOjb(numbers)
// newNumbers.x =20
// console.log(objNusxa(numbers));
// console.log(newNumbers);



// clonlash 3 ////////////////////////////////////////////
// let numbers = {
//     x:15,
//     y:20,
 
// }
// let addNumbers = {
//     z:30
// }

// let newNumbers = Object.assign({} ,numbers)  /////////////////// 1
// // let allNumber = Object.assign(numbers,addNumbers) /////////////////// 2

// newNumbers.x = 20
// console.log(numbers);
// console.log(newNumbers);

// clonlash 1  arraylar orqali////////////////////////////////////////////
// let number = [1,2,3,4,5,6]
// let arrNumber = number.slice()

// arrNumber[2] = 8
// console.log(arrNumber);

// let group1 = ["hasan","husan"]
// let group2 = ["diyor","amirxon"]


// SPREAD operatori///////////////////////////////////////////
// function spread (x,y,z){
//     console.log(x+y+z);
// }
// spread(1,2,3)


// 1111111111111111111111111111111111111111111
// let number = [1,2,3]
// function spread (x,y,z){
//     console.log(x+y+z);
// }
// spread(...number)

// SPREAD operatori object bilan///////////////////////////////
// let number = {
//     x:10,
//     y: 15,
// }

// let newNumber = {...number}
// newNumber.x = 20
// console.log(number);
// console.log(newNumber);
