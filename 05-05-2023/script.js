// function esercizio2() {
//   let number = parseInt(prompt("inserisci il primo numero"));
//   let calc = prompt("inserisci operatore");
//   let number2 = parseInt(prompt("inserisci il secondo numero"));

//   switch (calc) {
//     case "+":
//       result = number + number2;
//       console.log("il risultato è " + result);
//       break;

//     case "-":
//       result = number - number2;
//       console.log("il risultato è " + result);
//       break;

//     case "*":
//       result = number * number2;
//       console.log("il risultato è " + result);
//       break;

//     case "/":
//       result = number / number2;
//       console.log("il risultato è " + result);
//       break;
//   }
// }

// esercizio2();

function esercizio3() {
  const user = {
    name: "Andy",
    age: 30,
    color: "blue",
  };

  console.log(`il mio nome è ${user.name}`);
  console.log(`la mia età è ${user.age}`);
  console.log(`il mio colore è ${user.color}`);
}
esercizio3();

// esercizio avanzato

function superCalculator(num, operator, num2) {
  function addiction() {
    return num + num2;
  }

  function subtraction() {
    return num - num2;
  }

  function multiplrication() {
    return num * num2;
  }

  function division() {
    return num / num2;
  }

  if (operator === "+") {
    console.log(addiction());
  } else if (operator === "-") {
    console.log(subtraction());
  } else if (operator === "*") {
    console.log(multiplrication());
  } else if (operator === "/") {
    console.log(division());
  } else {
    console.log(operator);
    console.log("That's not an operator");
  }
}
const num = parseInt(prompt("inserisci il tuo numero"));
const operator = prompt("inserisci il tuo operatore");
const num2 = parseInt(prompt("inserisci il secondo numero"));
superCalculator(num, operator, num2);
