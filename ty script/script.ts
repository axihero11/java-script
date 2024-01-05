const colors: string[] = ['red', 'black', 'whihe']

let smth: any = 1
console.log(smth);

smth = 'sm'
console.log(smth);

// Type Assertion
let num = 4;

function logger(a: number | string): void {
    if (typeof a === "number") {
        console.log(a);
    }
    else if (typeof a === 'string') {
        console.log(a.toLocaleLowerCase());

    }
}

const numbers: number[] = [1, 2, 3, 4, 5]
numbers.map((num: number) => num.toFixed()) 

const logCar = (car: {name:string; year?: number}):string => {
    return `Name of car - ${car.name}, created ${car.year}`
}

console.log(logCar({name:"BMW",year: 2001}));


