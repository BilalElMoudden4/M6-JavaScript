//Funcion en js que diga si un string es palindrom o no
function Palindrom() {

    let palabra = prompt("Ingresa una paraula");
    let palindrom = palabra.split('').reverse().join('');

    if (palindrom === palabra) {
        alert("Aquest string es palindrom");
    } else {
        alert("Aquest string no es palindrom")
    }

}
