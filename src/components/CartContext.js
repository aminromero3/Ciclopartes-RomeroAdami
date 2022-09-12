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
    const [total, setTotal] = useState(0);

    const isInCart = (id) => {
        return carrito.some((item) => item.id === id);
    };

    const agregarProducto = (producto) => {
        if (isInCart(producto.id)){
            const newCarrito = carrito.map((item) => {
                if (item.id === producto.id){
                    return {...item, cantidad: item.cantidad + producto.cantidad}
                } else {
                    return item;
                }
            });
            setCarrito(newCarrito);
        }else{
            setCarrito([...carrito, producto]);
        }
    }

    const eliminarProducto = (id) => {
        setCarrito(carrito.filter(producto => producto.id !== id))
    }

    const vaciarCarrito = () => {
        setCantidad(0)
        setCarrito([])
    }
    
    const precioTotal = () => {
        console.log(carrito.map((item) => {
            return {total: item.precio * item.cantidad}
        }))
    }

    const valorDelContexto = {
        cantidad: cantidad,
        carrito : carrito,
        agregarProducto,
        eliminarProducto,       
        vaciarCarrito,
        precioTotal,
    }


    return(
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}

export default CustomProvider;