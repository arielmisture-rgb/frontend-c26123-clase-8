const KEY = "carrito";

export const guardarCarrito = (carrito) => {
    //
    localStorage.setItem(KEY, JSON.stringify(carrito))

    
}
// no se necesita ningun parametro por que estamos trabajando directo con el localstorage
export const obtenerCarrito = () => {
return JSON.parse(localStorage.getItem(KEY)) || []; //


    
}

export const vaciarCarritoStorage = () => {
    localStorage.removeItem(KEY);
    
}