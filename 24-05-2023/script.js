// ESERCIZIO 1
console.log("esercizio 1 ");
let persona = ["Mario", "Rossi", "Italia"];

let [nome, surename, country] = persona;

console.log(nome);
console.log(surename);
console.log(country);

// ESERCIZIO 2
console.log("esercizio 2 ");

let libro = {
  titolo: "Il Nome della Rosa",
  autore: "Umberto Eco",
  anno: 1980,
};

let { titolo, autore, anno } = libro;

console.log(titolo);
console.log(autore);
console.log(anno);
