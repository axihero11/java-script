'use strict';

const btn = document.querySelector('#btn');

// let timerId;
// let i = 0 

// btn.addEventListener("click", ()=>{
//   // timerId=setTimeout(logger,1000)
//   timerId=setInterval(logger,1000)
// })


// function logger() {
//   if(i === 3){
//     clearInterval(timerId)
//   }
//   console.log("set interval");
//   i++
// }




function myFunciton(){
  const car = document.querySelector(".car")
  let pos = 0 
  const timerId = setInterval(frame,10)
  function frame(){
    if(pos===700){
      clearInterval(timerId)
    }else{
      console.log(pos);
      pos++
      car.style.cssText = `left: ${pos}px; transform: rotate(${pos}deg)`
    }
  }
}
btn.addEventListener("click", myFunciton)