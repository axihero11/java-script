let box = document.querySelector("#box");
let buttons = document.querySelectorAll("button");
let circles = document.querySelectorAll(".circle");
let hearts = document.querySelectorAll(".heart");
let myWrapper = document.querySelector(".circle__wrapper");

let newTag = document.createElement("div")
newTag.classList.add("circle")
newTag.innerHTML = "E"
myWrapper.appendChild(newTag)








// style 1 - )
// box.style.width = '100px'
// box.style.height = '100px'

// style 2 - )
// box.style.cssText = `background-color: black; width: 100px; height:100px;`

// arr style  1 - )
// buttons[1].style.cssText = ` background-color: red;`

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// arr style  1 - )
// for(let i = 0; i < circles.length; i++){
//     circles[i].style.cssText = ` background-color: red;`
// }

// arr style 3 - )
// hearts.forEach((item) =>{
//     item.style.cssText = `background-color: green; `
// })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// create new tag
// let newCircle = document.createElement("div")
// newCircle.classList.add("circle")
// myWrapper.append(newCircle)
// newCircle.innerHTML = "F"
// newCircle.textContent = "F"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// circles[0].before(newCircle)
// circles[1].after(newCircle)
// circles[2].remove()
