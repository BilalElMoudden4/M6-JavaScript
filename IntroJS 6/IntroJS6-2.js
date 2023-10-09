function crearTabla() {
    // Obtén el número de filas y columnas ingresado por el usuario desde los elementos de formulario
    let filas = parseInt(document.getElementById("filas").value);
    let columnas = parseInt(document.getElementById("columnas").value);

    // Crea un elemento <table> en el documento HTML
    let tabla = document.createElement("table");
    
    for (let f = 0; f < filas; f++) {
        // Crea un elemento <tr> para representar una fila en la tabla
        let fila = document.createElement("tr");
            for (let c = 0; c < columnas; c++) {
            // Crea un elemento <td> para representar una celda en la fila
            let columna = document.createElement("td");
            columna.textContent = "Fila numero: "+ (f + 1) + " " + "Columna numero: " + (c + 1) + " ";
            // Añade la columna a la fila
            fila.appendChild(columna);
        }

        // Añade la fila a la tabla
        tabla.appendChild(fila);
    }

    // Limpia el contenido del contenedor HTML y Agrega la tabla recién creada al contenedor
    contenedor.innerHTML = "";
    contenedor.appendChild(tabla);
}

crearTabla();

