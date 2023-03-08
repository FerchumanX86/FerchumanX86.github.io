let carrito = []; // Array para almacenar los productos del carrito
let total = 0; // Variable para almacenar el total de la compra

//Funcion Dark (minuto 1:30)
const botonFondo =document.getElementById("botonFondo");

botonFondo.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")){
    localStorage.setItem("modo", "dark")
  } else{
    localStorage.setItem("modo", "ligth");
  }
})

//Recuperamos el modo del localStorage
const modo =localStorage.getItem("modo");
if(modo === "dark"){
  document.body.classList.add("dark");
}else {
  document.body.classList.remove("dark");
}

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
  elemento.innerText = `${nombre} - ${precio}`;
  listaCarrito.appendChild(elemento);

  // Actualizar el total del carrito
  total += precio;
  const totalCarrito = document.getElementById("total-carrito");
  totalCarrito.innerText = total.toFixed(2);
}


function finalizarCompra() {
    // Obtener el valor del elemento con el ID "total-carrito"
    let total = document.getElementById("total-carrito").innerText;
  
    // Obtener la fecha actual y formatearla como una cadena legible 
    let fecha = new Date().toLocaleDateString();
  
    // Almacenar el valor del total y la fecha en el almacenamiento local del navegador
    localStorage.setItem("compra", "Total: " + total + " - Fecha: " + fecha);
  
    // Mostrar una alerta con el total y la fecha de compra
    // alert("Gracias por su compra. Su pedido ha sido procesado.\n\n" + "Total: " + total + "\nFecha: " + fecha);

    // Modifico el aler para usar SweetAlert
    swal({
      title: "¡Gracias por tu compra!",
      text: "Tu pedido ha sido procesado correctamente.",
      icon: "success",
      buttons: {
        confirm: {
          text: "Ok",
          value: true,
          visible: true,
          className: "btn btn-primary",
          closeModal: true,
          onclick: function() {
            location.reload();
          }
        }
      },
      content: {
        element: "div",
        attributes: {
          innerHTML: "Total: " + total + "<br>Fecha: " + fecha
        }
      }
    });
    
  }


 