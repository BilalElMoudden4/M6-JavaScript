//Demanar un text a l'usuari i mostra
/*
1) Text en majuscula.
2) En minuscules.
3) Longitud total.
4) Nombre de paraules.
5) El numero de vocals.
6) Les vocals que conté.
7) La frase en n linies on cada linea li falta una lletra de davant.
*/

const texto = prompt('Introdueix un text:');

const mayusuculas = texto.toUpperCase();
console.log("Texto en mayusculas: " + mayusuculas);

const minusculas = texto.toLowerCase();
console.log("Texto en minusculas: " + minusculas);

const longitudTotal = texto.length;
console.log("Longitud total: " + longitudTotal);

const numeroPalabras = texto.split(" ").length;
console.log("Numero de palabras: " + numeroPalabras);

const numeroVocales = (texto.match(/[AEIOUaeiou]/g)).length;
console.log("El número de vocales: " + numeroVocales);



