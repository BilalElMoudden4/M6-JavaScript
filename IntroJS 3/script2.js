function Ejercicio2() {
    let numero1 = prompt("Ingresa un numero");
    let numero2 = prompt("Ahora ingresa un numero");
    let numero3 = prompt("Otro más");

    let mayor = Math.max(numero1, numero2, numero3);
    let menor = Math.min(numero1, numero2, numero3);
    console.log("El numero mayor es: " + mayor);
    console.log("El numero mayor es: " + menor);
    //Por arreglar
    let suma = parseint(numero1) + parseint(numero2) + parseint(numero3);
    let mitjana = parseint(suma)/3;
    console.log("La mitjana es: " + mitjana);
}

Ejercicio2();