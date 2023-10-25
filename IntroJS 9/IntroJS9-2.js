/*
Obtenir un nº entre a l'atzar entre [1-100]. Es tracta de que l'usuari l'endevini. Si l'endevina se li mostrará
"Obtingut en n intents" Si introdueix un zero es pintará "Game over" i sortirá. 
Si falla se li dirá "menor" o "major". Si introdueix algun valor invalid no posa res(es segueix) pero es compte com un intent més.
*/

const numAleatori = Math.floor(Math.random() * 100) + 1;
let intents = 0;

while (true) {
    const input = (prompt("Introdueix un numero entre [1-100]"));
    const numero = parseInt(input);

    if (isNaN(numero) || numero < 0 || numero > 100){
    
    }else if (numero === 0){
        alert("Game over");
        break;  
    }else {
        intents++;

        if (numero == numAleatori){
            alert("Ho has endevinat despres de " + intents + " intents");
            break;
        }else if (numero < numAleatori){
            alert("Major");
        }else{
            alert("Menor");
        }
    }
}
