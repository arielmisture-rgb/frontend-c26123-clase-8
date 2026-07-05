import { guardarCarrito, obtenerCarrito, vaciarCarritoStorage } from "./storage.js"
import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlcarrito = (producto) => {
  const carrito = obtenerCarrito() //pide el carrito al storage
  carrito.push(producto); // agrega el producto
  guardarCarrito(carrito) // guarda el producto en el storage
  actualizarContador(carrito) // actualiza el numero del carrito en el span del index.html
  mostrarMensaje("Producto agregado 👍")
    
}

export const eliminarProducto = (indice) => {
const carrito = obtenerCarrito()
carrito.splice(indice,1);     //desde el indice o posicion elimina un elemento del array
guardarCarrito(carrito);
actualizarContador(carrito);
mostrarMensaje("Producto eliminado 🤟")
}

export const vaciarCarrito = () => {
    vaciarCarritoStorage();
    actualizarContador([]);
    mostrarMensaje("Carrito vaciado 🗑️")
    
}