/* function crearTabla() {
    let numColumnas = parseInt(prompt("Ingrese el número de columnas en la última fila:"));
    let tabla = document.getElementById("tabla");
    tabla.innerHTML = ''; // Limpia la tabla actual

    let mitadColumnas = Math.ceil(numColumnas / 2);

    for (let i = 1; i <= numColumnas; i++) {
      let fila = document.createElement("tr");
      for (let j = 1; j <= i * 2 - 1; j++) { // Solo números impares
        if (j >= mitadColumnas - i + 1 && j <= mitadColumnas + i - 1) {
          let celda = document.createElement("td");
          celda.style.width = (50 + (mitadColumnas - i) * 20) + 'px'; // Ancho de celda dinámico
          fila.appendChild(celda);
        } else {
          fila.innerHTML += '<td></td>';
        }
      }
      tabla.appendChild(fila);
    }
  }
  
  */