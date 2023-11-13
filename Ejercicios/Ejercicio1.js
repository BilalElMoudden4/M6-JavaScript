//Funció JS que li donem un numero i torna el numero invertit.
function inverso(){

    let numero = parseInt(prompt("Introduce un numero entero qualquiera: "));

    let numeroInvertido = numero.toString().split('').reverse().join('');

    alert("Si invertimos el numero da como resultado: " + numeroInvertido);

}