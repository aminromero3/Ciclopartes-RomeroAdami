import React from "react";
import { createContext, useContext, useState } from "react";

export const contexto = createContext(); 

const { Provider } = contexto; 
 
export const useCarrito = () => {
    return useContext(contexto);
}

const CustomProvider = (props) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (producto) => {
        console.log("Soy el contexto!")
        console.log(producto)
        //cantidad = cantidad + producto.cantidad;
        setCantidad(cantidad + producto.cantidad)
    }

    const eliminarProducto = () => {
        
    }

    const vaciarCarrito = () => {
        setCantidad(0)
        setCarrito([])
    }

    const valorDelContexto = {
        cantidad: cantidad,
        carrito : carrito,
        agregarProducto,
        eliminarProducto,
    }

    return(
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}


export default CustomProvider;