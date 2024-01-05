"use strict"

///////////////////////////////////////
function firstFunction1 (){
    console.log("salom");
}
firstFunction1()

////////////////////////////////////////
function firstFunction2 (text){
    console.log(text);
}
firstFunction2("hello")

////////////////////////////////////////
function firstFunction3 (name , sureName){
    console.log(`My name is ${name} ,${sureName} `);
}
firstFunction3("Ahror","Temirov")

////////////////////////////////////////
function calc (a,b){
    return a+b
}
console.log(calc(10,5));