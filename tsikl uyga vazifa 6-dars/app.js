"use strict";
alert("savollarimizga tugri javob bering");

let countSeries = +prompt("Nechta serial kurgansiz");

let seriesDB = {
  count: countSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 2; i++) {
  let a = prompt("oxirgi kurgan seriallingiz"),
      b = prompt("nechi baho berasiz");
  if (a != null && b != null && a != "" && b != "") {
    seriesDB.series[a] = b;
    console.log("malumot saqlandi");
  }
  else{
      console.log("Uynamasdan tuldir");
      i--;
  }
}

if (seriesDB.count < 5) {
  console.log("siz kam serial kurgansiz");
} else if (seriesDB.count >= 5 && seriesDB.count < 10) {
  console.log("siz klassic tomoshabin ekansiz");
} else if (seriesDB.count >= 10) {
  console.log("siz serialhor ekansiz");
}
console.log(seriesDB);