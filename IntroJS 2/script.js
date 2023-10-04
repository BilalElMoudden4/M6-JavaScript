
/* let respuesta = prompt("Ingresa un numero");

console.log("Tabla del " + respuesta);

if(respuesta < 0 || respuesta > 10){
    console.log("El numero tiene que estar entre [0 - 10]");
}else{
    for (let i = 1; i <=10; i++){
        console.log(`${respuesta} * ${i} = ${respuesta*i}`);
    }
} */

let pos = prompt("Ingresa la posicion del fibonnaci");
let x = 1,  y = 1,  fibo = 0;

if (pos == 1 || pos ==2 ){
    alert("El valor es 1")
}else if (pos > 2){
    for (let i = 3; i < pos; i++){
        fibo = x + y;
        x = y;
        y = fibo;
        console.log(fibo);
    }
}

