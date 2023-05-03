// esercizio 1

function es1() {
  let userNumber = parseInt(prompt("Ciao, inserisci un numero"));

  if (userNumber % 2 === 0) {
    console.log("Your number is even");
  } else {
    console.log("Your number is odd");
  }
}

function es2() {
  let userNumber2 = parseInt(prompt("Ciao, inserisci un numero"));

  userNumber2 % 2 === 0
    ? console.log("Your number is even")
    : console.log("Your number is odd");
}

function es3() {
  let number = parseInt(prompt("inserisci il primo numero"));
  let calc = prompt("inserisci operatore");
  let number2 = parseInt(prompt("inserisci il secondo numero"));

  switch (calc) {
    case "+":
      result = number + number2;
      console.log("il risultato è " + result);
      break;

    case "-":
      result = number - number2;
      console.log("il risultato è " + result);
      break;

    case "*":
      result = number * number2;
      console.log("il risultato è " + result);
      break;

    case "/":
      result = number / number2;
      console.log("il risultato è " + result);
      break;
  }
}
es1();
es2();
es3();
