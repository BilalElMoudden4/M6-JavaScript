/* Demanar a l'usuari un nº. Pasarlo a binari, octal i hexadecimal. 
(Utilitzar bucles, condicionals i operacions matematicas). */

function BuscaBinario() {
    let numero = parseInt(prompt("Ingresa un número:"));

    if (isNaN(numero) || numero < 0) {
        console.log("Debes ingresar un número válido y mayor o igual a 0.");
        return; // Salir de la función si no es un número válido o es negativo.
    }else {
        
        let binario = "";

        if (numero === 0) {
            binario = 0;
        } else {
            while (numero > 0) {
                let residuo = numero % 2;
                binario = residuo + binario;
                numero = Math.floor(numero / 2);
            }
        }
        console.log("El numero que has ingresado, convertido en binario es " + binario);
    }
   
}

BuscaBinario();
