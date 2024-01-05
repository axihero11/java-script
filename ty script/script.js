var colors = ['red', 'black', 'whihe'];
var smth = 1;
console.log(smth);
smth = 'sm';
console.log(smth);
// Type Assertion
var num = 4;
function logger(a) {
    if (typeof a === "number") {
        console.log(a);
    }
    else if (typeof a === 'string') {
        console.log(a.toLocaleLowerCase());
    }
}
var numbers = [1, 2, 3, 4, 5];
numbers.map(function (num) { return num.toFixed(); });
var logCar = function (car) {
    return "Name of car - ".concat(car.name, ", created ").concat(car.year);
};
console.log(logCar({ name: "BMW", year: 2001 }));
