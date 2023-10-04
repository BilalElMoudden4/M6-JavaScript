//Demanar 2 numero al l'usuari y dir quin dels dos numeros está més a prop del 100
function MasCerca(){

    let num1 = prompt("Ingresa un numero");
    let num2 = prompt("Ahora ingresa un segundo numero");
    //Math.abs es pel valor absolut
    if (Math.abs(num1 - 100) < Math.abs(num2 - 100)){
        console.log(num1 + " está más cerca del cien que " + num2);
    }else {
        console.log(num2 + " está más cerca del cien que " + num1);
    }

}


