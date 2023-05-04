console.log("esercizio 1");

function es1() {
  let array = [1, 2, 3, 4, 5];
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    console.log(number);
  }

  for (let i = array.length - 1; i >= 0; i--) {
    let number = array[i];
    newArray.push(number);
    console.log(newArray);
  }
}

es1();

console.log("esercizio 2");
var numbers = [4, 1, 6, 8, 2, 9];

// var min = Math.min(...numbers);
// var max = Math.max(...numbers);

// console.log("Il valore min è: " + min);
// console.log("Il valore max è: " + max);

let max = numbers[0];
for (let number of numbers) {
  if (max < number) {
    max = number;
  }
}

let min = numbers[0];
for (let number of numbers) {
  if (min > number) {
    min = number;
  }
}

console.log("il valore massimo è " + max);
console.log("il valore minimo è " + min);
