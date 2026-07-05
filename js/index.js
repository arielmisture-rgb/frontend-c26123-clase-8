
import { agregarAlcarrito } from "./funcionesCarrito.js";

import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

// esta funcion interactua con el dom 
const renderizarProductos = () => {
    const contenedor = document.getElementById("contenedor-tarjetas"); 
    //agarro el div del index.html para meter las tarjetas
    
 fetch("./data/productos.json")
 .then((Response) => Response.json())
 .then((data) => data.forEach((producto) => {
        const tarjeta = document.createElement("article"); // crea el articule que contiene las tarjetas
        tarjeta.classList.add("tarjeta-producto");

        const img = document.createElement("img");
        img.src = `./${producto.img}`;
        img.alt = producto.nombre;

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio}`;

        const boton = document.createElement("button");
        boton.classList.add("btn")
        boton.textContent = "Agregar al carrito";

        boton.addEventListener("click", () => {
            agregarAlcarrito(producto); //variable iteradora que tiene la tarjeta con los datos (img, p, etc)
        });
         // seguimos dentro del ciclo
         // se crea la estructura de la tarjeta dentro del article

         tarjeta.appendChild(img);
         tarjeta.appendChild(titulo);
         tarjeta.appendChild(precio)
         tarjeta.appendChild(boton)

         contenedor.appendChild(tarjeta) // se mete el articule en el div
        
    }),

)

 
.catch((error) => console.log(error))

};

document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);
    renderizarProductos();
})