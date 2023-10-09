/*Demanar 2 numeros {Preu Producte } tornar la combinacio del minim canvi en bitllets i monedes d'euro i centims
                    {diners lliurats}
*/

function CalcularCambio() {
    
    const precioProducto = parseFloat(prompt("Preu del Producte"));
    const dineroPagado = parseFloat(prompt("Diners lliurats"));

    let cambio = dineroPagado - precioProducto;

    console.log(`Cambio total: ${cambio.toFixed(2)} euros`);    

    const billetes = [
        { nombre: "billete de 50€", valor: 50 },
        { nombre: "billete de 20€", valor: 20 },
        { nombre: "billete de 10€", valor: 10 },
        { nombre: "billete de 5€", valor: 5 },
        { nombre: "moneda de 2€", valor: 2 },
        { nombre: "moneda de 1€", valor: 1 },
        { nombre: "moneda de 50 céntimos", valor: 0.5 },
        { nombre: "moneda de 20 céntimos", valor: 0.2 },
        { nombre: "moneda de 10 céntimos", valor: 0.1 },
        { nombre: "moneda de 5 céntimos", valor: 0.05 },
        { nombre: "moneda de 2 céntimos", valor: 0.02 },
        { nombre: "moneda de 1 céntimo", valor: 0.01 },
    ];

    for (const cambioTotal of billetes) {
        const cantidad = Math.floor(cambio / cambioTotal.valor);
        if (cantidad > 0) {
          console.log(`${cantidad} ${cambioTotal.nombre}`);
          cambio -= cantidad * cambioTotal.valor;
        }
      }
      

}


//CalcularCambio();
