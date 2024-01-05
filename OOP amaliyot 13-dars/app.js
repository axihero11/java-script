"use strict";

let seriesDB = {
  count: 0,
  series: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    while (
      seriesDB.count == "" ||
      seriesDB.count == null ||
      isNaN(seriesDB.count)
    ) {
      seriesDB.count = +prompt("Nechta serial kurgansiz", "");
    }
  },
  rememberMySeries: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("oxirgi kurgan seriallingiz"),
        b = +prompt("nechi baho berasiz");
      if (a != null && b != null && a != "" && b != "") {
        seriesDB.series[a] = b;
        console.log("malumot saqlandi");
      } else {
        console.log("Uynamasdan tuldir");
        i--;
      }
    }
  },
  detectLevelSeries: function () {
    if (seriesDB.count < 5) {
      console.log("siz kam serial kurgansiz");
    } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
      console.log("siz klassic tomoshabin ekansiz");
    } else if (seriesDB.count >= 10) {
      console.log("siz serialhor ekansiz");
    }
  },
  showDB: function () {
    if (!seriesDB.private) {
      console.log(seriesDB);
    }
  },
  visibleDB: function () {
    if (seriesDB.private) {
      seriesDB.private = false;
    } else {
      seriesDB.private = true;
    }
  },
  writeGenre: function () {
    // for (let i = 0; i <= 2 ; i++) {  //1 usul
    //   let yourGenres = prompt(`yoqtirgan genrengiz ${i + 1}`);
    //   if (yourGenres === "" || yourGenres == null){
    //     console.log("siz notugri malumot kiritingiz");
    //     i = 0
    //   }else{
    //     seriesDB.genres[i] = yourGenres;
    //   }
    // }

    // 2 - )
    let yourGenres = prompt(`yoqtirgan genrengiz vergul yordamida kiriting`);
    if (yourGenres === "" || yourGenres == null) {
      console.log("siz notugri malumot kiritingiz");
      i--;
    } else {
      seriesDB.genres = yourGenres.split(", ");
    }
    seriesDB.genres.forEach((item, index) => {
      console.log(`sizning janiringiz ${item} va tartib raqami ${index + 1}`);
    });
  },
};
