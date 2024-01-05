"use strict";

const wrapper = document.querySelector(".btn-block"),
  btns = document.querySelectorAll("button");

wrapper.addEventListener("click", (event) => {
  if(event.target && event.target.classList.contains('red')){
    console.log('btn click');
  }
});

// if
// let btn = document.createElement("button")
// btn.classList.add("red")
// wrapper.appendChild(btn)

// btns.forEach((item) =>{
//   item.addEventListener('click',()=>{
//     console.log("clicked");
//   })
// })

// you write to top
// btns[0].addEventListener("click",() =>{
//   btns[1].classList.toggle("red")
// })
