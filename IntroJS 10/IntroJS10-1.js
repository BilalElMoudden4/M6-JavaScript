//Demanar a l'usuari any1 [2000 - 2050] any2 [2000 - 2050] dir el primer any entre les dues que comença dimecres.

function esMiercoles(fecha) {
    return fecha.getDay() === 3; // El día miércoles tiene un valor de 3 en JavaScript (0 = domingo, 1 = lunes, 2 = martes, 3 = miércoles, etc.).
  }
  
  function encontrarPrimerMiercoles(anyo1, anyo2) {
    for (let anyo = anyo1; anyo <= anyo2; anyo++) {
      const fecha = new Date(anyo, 0, 1); // 0 representa enero (el primer mes), y 1 representa el día 1.
      if (esMiercoles(fecha)) {
        return anyo;
      }
    }
    return null; // Si no se encuentra ningún año que cumpla la condición.
  }
  
  const anyo1 = parseInt(prompt("Ingresa el primer año (entre 2000 y 2050):"));
  const anyo2 = parseInt(prompt("Ingresa el segundo año (entre 2000 y 2050):"));
    
  if (anyo1 >= 2000 && anyo1 <= 2050 && anyo2 >= 2000 && anyo2 <= 2050) {
    const primerMiercoles = encontrarPrimerMiercoles(anyo1, anyo2);
    if (primerMiercoles) {
      console.log("El primer año entre " + anyo1 + " y " + anyo2 + " que comienza en un miércoles es "  + primerMiercoles);
    } else {
      console.log("No hay años entre " + anyo1 + " y " + anyo2 + " que comiencen en un miércoles.");
    }
  } else {
    console.log("Por favor, ingresa años válidos dentro del rango de 2000 a 2050.");
  }
  

  