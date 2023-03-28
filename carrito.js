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

function vaciarCarrito() {
  // Vaciar el array del carrito
  carrito = [];

  // Vaciar la lista de productos del carrito
  const listaCarrito = document.getElementById("lista-carrito");
  listaCarrito.innerHTML = '';

  // Restablecer el total del carrito a 0
  total = 0;
  const totalCarrito = document.getElementById("total-carrito");
  totalCarrito.innerText = total.toFixed(2);
}

const accessKey = "xuu00EhTOzmUj4fDG_EhvZS-qD8On5vsRZMpohw7DTY"; // Reemplaza esto con tu clave de acceso de Unsplash


function obtenerImagenes() {
  const productos = ["cup of tea", "Cup of coffee", "smoothie"];
  const idsImagenes = ["imagen-te", "imagen-cafe", "imagen-licuado"];

  productos.forEach((producto, index) => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${producto}&client_id=${accessKey}&per_page=1&orientation=landscape`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          const imagenUrl = data.results[0].urls.small;
          const imagenProducto = document.getElementById(idsImagenes[index]);
          imagenProducto.style.backgroundImage = `url(${imagenUrl})`;
        }
      })
      .catch((error) => {
        console.error("Error al obtener imágenes:", error);
      });
  });
}


// Llama a la función obtenerImagenes al cargar la página
window.addEventListener("load", obtenerImagenes);


function mostrarCompras() {
  let compras = JSON.parse(localStorage.getItem("compras")) || [];

  if (compras.length === 0) {
      alert("No hay compras realizadas.");
      return;
  }

  let comprasTexto = compras
      .map((compra, index) => {
          return `Compra ${index + 1}:\nTotal: ${compra.total}\nFecha: ${compra.fecha}`;
      })
      .join("\n\n");

  alert("Compras realizadas:\n\n" + comprasTexto);
}

function finalizarCompra() {
    // Obtener el valor del elemento con el ID "total-carrito"
    let total = document.getElementById("total-carrito").innerText;
  
    // Obtener la fecha actual y formatearla como una cadena legible 
    let fecha = new Date().toLocaleDateString();

    
  
      // Almacenar el valor del total y la fecha en el almacenamiento local del navegador como un array
      let compras = JSON.parse(localStorage.getItem("compras")) || [];
      compras.push({ total: total, fecha: fecha });
      localStorage.setItem("compras", JSON.stringify(compras));
  
      // Resto del código de la función finalizarCompra()...
  
  
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


 