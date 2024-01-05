"use strict";

const adv = document.querySelectorAll(".promo__adv img"),
  wrapper = document.querySelector(".promo__bg"),
  genre = wrapper.querySelector(".promo__genre"),
  seriesList = document.querySelector(".promo__interactive-list");

 
const mySeries = {
 series:[
  "opasingillar",
  "ota suzi",
  "senga oshiqman",
  "shaytanat",
  "dushman dugonalar"
 ]
}
seriesList.innerHTML = ''
mySeries.series.forEach((item,index) =>{
  console.log(index);
  seriesList.innerHTML += `
      <li class="promo__interactive-item">
        ${index+1}: ${item}
        <div class="delete"></div>
      </li>
  `
})

adv.forEach((item) => {
  item.remove();
});

genre.textContent = "Comedy";

wrapper.style.cssText = `background: url("./img/1.jpg")`