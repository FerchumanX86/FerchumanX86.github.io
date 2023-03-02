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
    var total = document.getElementById("total-carrito").innerText;
    var fecha = new Date().toLocaleDateString();
    localStorage.setItem("compra", "Total: " + total + " - Fecha: " + fecha);
    alert("Gracias por su compra. Su pedido ha sido procesado.\n\n" + "Total: " + total + "\nFecha: " + fecha);
    location.reload();
}
/*
tiliza un array llamado carrito para almacenar los productos que el usuario agrega al carrito.
La función agregarProducto se encarga de crear un objeto con los datos del producto (nombre y precio) y lo agrega al array del carrito.
Luego, la función actualiza la lista de productos del carrito en el HTML y el total de la compra.
El HTML incluye una lista de productos y botones que llaman a la función agregarProducto con los datos correspondientes.
agregó un nuevo botón con el texto "Comprar Ahora", que al hacer clic en él, llamará a la función finalizarCompra().
La función finalizarCompra() obtiene el valor total del carrito de compras y la fecha actual mediante el uso del objeto Date.
Luego, guarda la compra realizada en la memoria del navegador utilizando el objeto localStorage
*/