// http://net-informations.com/js/dom/events.htm  //for event

const btns = document.querySelectorAll(".btn2");
const link = document.querySelector("a");
const btn1 = document.querySelector("#btn1");
const h1 = document.querySelector("#h1");

const input = document.querySelector("#input");
const img = document.querySelector("#img");
const img1 = document.querySelector("#img1");
input.onchange = (e) => {
    if(input.files[0])
    img.src = URL.createObjectURL(input.files[0])
}
















// 1 - ) number one for click//////////////////////////////////////////////////////////
// btn1.onclick = function(){
//     alert("click first")
// }
// btn1.onclick = function(){
//     alert("click second")
// }

// 2 - ) number two
// btn1.addEventListener("click", () => {
//     alert("click first")
// })
// btn1.addEventListener("click", () => {
//     alert("click second")
// })

// 1 - ) usul number one ///////////////////////////////////////////////////////////////
// btn1.addEventListener("mouseenter", (event) => {
//     // alert("hover first")
//     // console.log(event.target);
//     // event.target.remove()
// })

// misol
// const deleteEvent = (event) =>{
//     event.target.remove()
// }
// btn1.addEventListener("click", deleteEvent)

// DOM ni default holatini almashtirish////////////////////////////////////////////////////
// link.addEventListener("click" ,(event)=>{
//     event.preventDefault()
//     alert("hech qayerga uta olmadingmi")
// })
