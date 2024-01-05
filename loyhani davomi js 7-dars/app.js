"use strict";
alert("savollarimizga tugri javob bering");

let countSeries;
function startApp() {
    while (countSeries == "" || countSeries == null || isNaN(countSeries)) {
        countSeries = +prompt("Nechta serial kurgansiz", "");
    }
}
// startApp();

let seriesDB = {
    count: countSeries,
    series: {},
    actors: {},
    genres: [],
    private: false,
    rememberMySeries: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("oxirgi kurgan seriallingiz"),
                b = prompt("nechi baho berasiz");
            if (a != null && b != null && a != "" && b != "") {
                seriesDB.series[a] = b;
                console.log("malumot saqlandi");
            } else {
                console.log("Uynamasdan tuldir");
                i--;
            }
        }
        console.log(seriesDB);
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
};

// vazifa
function showDB(hidden) {
    if (!hidden.private) {
        console.log(seriesDB);
    }
}
// showDB(seriesDB);

function genres1() {
    for (let i = 0; i <= 2; i++) {
        let yourGenres = prompt(`yoqtirgan janringiz, ${i + 1}`);
        seriesDB.genres[i] = yourGenres;
    }
    console.log(seriesDB);
}
genres1()

console.log(seriesDB.detectLevelSeries);


