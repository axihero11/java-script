window.addEventListener("DOMContentLoaded", () => {
  const tabsParent = document.querySelector(".tabheader__items"),
    tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    loader = document.querySelector(".loader");

  // This is function for Loader
  // setTimeout(() => {
  //   loader.style.opacity = "0";
  //   setTimeout(() => {
  //     loader.style.display = "none";
  //   }, 500);
  // }, 2000);

  // This is function for Tabs
  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }
  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }
  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    let target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, idx) => {
        if (target == item) {
          hideTabContent();
          showTabContent(idx);
        }
      });
    }
  });
});


let deadline = "2023-12-31";
console.log(Date.parse("2023-12-31"));

function getTime(endTime) {
  let time = Date.parse(endTime) - Date.parse(new Date())
  let days = Math.floor(time / (1000 * 60 * 60 * 24)),
    hours = Math.floor((time / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((time / 1000 / 60) % 60),
    secondes = Math.floor((time / 1000) % 60)

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    secondes: secondes
  }
}

function setClock(timer, endTime) {
  var days = document.querySelector('#days'),
    hours = document.querySelector('#hours'),
    minutes = document.querySelector('#minutes'),
    seconds = document.querySelector('#seconds');

  let timeLiner = setInterval(getClock, 1000)
  getClock()
  function getClock() {
    let clock = getTime(endTime)
    days.innerHTML = clock.days
    hours.innerHTML = clock.hours
    minutes.innerHTML = clock.minutes
    seconds.innerHTML = clock.secondes
  }
}
setClock(".timer", deadline)















//   // This is function for Tabs { -----
//   let deadline = "2023-05-25";
// console.log(Date.parse("2023-05-25"));

//   // This is mini function to get endTime and startTime { ---
//   function getTimeRemaining(endtime) {
//     const timer = Date.parse(endtime) - Date.parse(new Date()),
//       days = Math.floor(timer / (1000 * 60 * 60 * 24)),
//       hours = Math.floor((timer / (1000 * 60 * 60)) % 24),
//       minutes = Math.floor((timer / 1000 / 60) % 60),
//       seconds = Math.floor((timer / 1000) % 60);

//     return {
//       timer,
//       days,
//       hours,
//       minutes,
//       seconds,
//     };
//   }
//   // This is mini function to num unshift 0  { ---
//   function getZero(num) {
//     if (num >= 0 && num < 10) {
//       return `0${num}`;
//     } else {
//       return num;
//     }
//   }
//   //----}

//   //----}

//   // This is mini function to get from HTML to Java Script { ----
//   function setClock(selector, endtime) {
//     const timer = document.querySelector(selector),
//       days = timer.querySelector("#days"),
//       hours = timer.querySelector("#hours"),
//       minutes = timer.querySelector("#minutes"),
//       seconds = timer.querySelector("#seconds");
//     timeInterval = setInterval(upDateClock, 100);
//     upDateClock();
//     function upDateClock() {
//       const t = getTimeRemaining(endtime);
//       days.innerHTML = getZero(t.days);
//       hours.innerHTML = getZero(t.hours);
//       minutes.innerHTML = getZero(t.minutes);
//       seconds.innerHTML = getZero(t.seconds);
//       if (t.timer <= 0) {
//         clearInterval(timeInterval);
//       }
//     }
//   }
//   //----}
//   setClock(".timer", deadline);
//   // -----}
// });

// this is function to next lesson homework
// function getTimeRemaining(endtime) {
// let days, hours, minutes, seconds;
// const timer = Date.parse(endtime) - Date.parse(new Date());
// if (timer <= 0) {
//   days = 0;
//   hours = 0;
//   minutes = 0;
//   seconds = 0;
// } else {
//   days = Math.floor(timer / (1000 * 60 * 60 * 24));
//   hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
//   minutes = Math.floor((timer / 1000 / 60) % 60);
//   seconds = Math.floor((timer / 1000) % 60);
// }
