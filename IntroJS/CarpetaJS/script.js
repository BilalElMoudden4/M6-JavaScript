function mostrarAlerta() {
    alert("Has pulsado el botón")
}

function otraAlerta(){
    let alerta = document.getElementById("alerta2").value;

    if(alerta > 10 || alerta < 0){
        alert("¡No! , el numero tiene que estar entre el 0 y el 10");
    }else
        for (let numero = 1; numero <= 10; numero++){
        console.log(alerta + " * " + numero +" = " + alerta  * numero);
        console.log();
    }            
}