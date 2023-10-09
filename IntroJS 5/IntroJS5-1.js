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

function BuscaOctal() {
    let numero = parseInt(prompt("Ingresa un número:"));

    if (isNaN(numero) || numero < 0) {
        console.log("Debes ingresar un número válido y mayor o igual a 0.");
        return; // Salir de la función si no es un número válido o es negativo.
    } else {
        let octal = "";

        if (numero === 0) {
            octal = 0;
        } else {
            while (numero > 0) {
                let residuo = numero % 8; // Obtener el residuo al dividir por 8.
                octal = residuo + octal; // Agregar el residuo a la representación octal.
                numero = Math.floor(numero / 8); // Dividir el número entre 8.
            }
        }
        console.log("El número que has ingresado, convertido en octal es " + octal);
    }
}

function BuscaHexadecimal() {
    let numero = parseInt(prompt("Ingresa un número:"));

    if (isNaN(numero) || numero < 0) {
        console.log("Debes ingresar un número válido y mayor o igual a 0.");
        return; // Salir de la función si no es un número válido o es negativo.
    } else {
        let hexadecimal = "";

        if (numero === 0) {
            hexadecimal = "0";
        } else {
            while (numero > 0) {
                let residuo = numero % 16; // Obtener el residuo al dividir por 16.
                hexadecimal = obtenerCaracterHexadecimal(residuo) + hexadecimal; // Agregar el dígito hexadecimal correspondiente.
                numero = Math.floor(numero / 16); // Dividir el número entre 16.
            }
        }
        console.log("El número que has ingresado, convertido en hexadecimal es " + hexadecimal);
    }
}

function obtenerCaracterHexadecimal(numero) {
    if (numero >= 0 && numero <= 9) {
        return numero.toString(); // Si es un número del 0 al 9, retorna el mismo número como string.
    } else {
        // Si es mayor a 9, retorna el carácter hexadecimal correspondiente (A, B, C, ...). 
        switch (numero) {
            case 10: return "A";
            case 11: return "B";
            case 12: return "C";
            case 13: return "D";
            case 14: return "E";
            case 15: return "F";
            default: return ""; // En caso contrario, retorna una cadena vacía.
        }
    }
}




BuscaBinario();
BuscaOctal();   
BuscaHexadecimal ();
