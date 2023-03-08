let carrito = []; // Array para almacenar los productos del carrito
let total = 0; // Variable para almacenar el total de la compra

// Función para agregar un producto al carrito
function agregarProducto(nombre, precio) {
  // Crear un objeto con los datos del producto
  const producto = {
    nombre: nombre,
    precio: precio
  };

  // Agregar el producto al array del carrito
  carrito.push(producto);

  // Actualizar la lista de productos del carrito
  const listaCarrito = document.getElementById("lista-carrito");
  const elemento = document.createElement("li");
  elemento.innerText = `${nombre} - $${precio}`;
  listaCarrito.appendChild(elemento);

  // Actualizar el total del carrito
  total += precio;
  const totalCarrito = document.getElementById("total-carrito");
  totalCarrito.innerText = total.toFixed(2);
}


function finalizarCompra() {
    // Obtener el valor del elemento con el ID "total-carrito"
    var total = document.getElementById("total-carrito").innerText;
  
    // Obtener la fecha actual y formatearla como una cadena legible por humanos
    var fecha = new Date().toLocaleDateString();
  
    // Almacenar el valor del total y la fecha en el almacenamiento local del navegador
    localStorage.setItem("compra", "Total: " + total + " - Fecha: " + fecha);
  
    // Mostrar una alerta con el total y la fecha de compra
    alert("Gracias por su compra. Su pedido ha sido procesado.\n\n" + "Total: " + total + "\nFecha: " + fecha);

        swal("Gracias por su compra. Su pedido ha sido procesado.\n\n" + "Total: " + total + "\nFecha: " + fecha);
        //🤔 queria cambiar el alert por un swal pero no funciona, si alguno me puede dar una mano con eso 

    // Recargar la página
    location.reload();
  }


