//Demanar 3 numeros i comprovar que es tracta de una data valida.
function RevisarFecha() {

    // Solicitar al usuario que ingrese una hora, un minuto y un segundo
    let dia = parseInt(prompt("Ingresa un dia"));
    let mes = parseInt(prompt("Ingresa un mes"));
    let año = parseInt(prompt("Ingresa un año"));

    // Crear un objeto de fecha actual
    let fecha2 = new Date();

    fecha2.setDate(dia);
    fecha2.setMonth(mes);
    fecha2.setFullYear(año);

    // Obtener las horas, minutos y segundos del objeto de fecha
    let diaObtenido = fecha.getHours();
    let mesObtenido = fecha.getMinutes();
    let añobtenido = fecha.getSeconds();

}