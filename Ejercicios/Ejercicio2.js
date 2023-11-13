//Funcion para comprovar si un numero es Par o Impar
function esPar() {
    let numero = prompt("Introduce un numero para saber si es par o impar");

    if (numero % 2 == 0){
        alert("El numero que has ingresado es par");
    }else {
        alert("El numero que has ingresado es impar")
    }
}