// carrito esta guardado en el storage
export const actualizarContador = (carrito) => {
    const contador = document.getElementById("contador-carrito") // toma el id del span del index.html
    if(contador){
        contador.textContent = carrito.length;
    }

};

export const mostrarMensaje = (mensaje) =>  {
    alert(mensaje);

};