// Definir una función para obtener y mostrar la hora, minutos y segundos ingresados por el usuario
function HoraMinutoSegundo() {
    
    // Solicitar al usuario que ingrese una hora, un minuto y un segundo
    let hora = parseInt(prompt("Ingresa una hora"));
    let minutos = parseInt(prompt("Ingresa un minuto"));
    let segundos = parseInt(prompt("Ingresa un segundo"));

    // Crear un objeto de fecha actual
    let fecha = new Date();

    // Establecer la hora, minutos y segundos en el objeto de fecha
    fecha.setHours(hora);
    fecha.setMinutes(minutos);
    fecha.setSeconds(segundos + 1);

    // Obtener las horas, minutos y segundos del objeto de fecha
    let horasObtenidas = fecha.getHours();
    let minutosObtenidos = fecha.getMinutes();
    let segundosObtenidos = fecha.getSeconds();

    console.log(horasObtenidas + ":" + minutosObtenidos + ":" + segundosObtenidos);
}