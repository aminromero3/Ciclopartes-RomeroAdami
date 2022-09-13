import React from "react";
import { createContext, useContext, useState } from "react";
import { db } from "./firebase"
import { collection, addDoc , serverTimestamp } from "firebase/firestore";

export const contexto = createContext(); 

const { Provider } = contexto; 
 
export const useCarrito = () => {
    return useContext(contexto);
}

const CustomProvider = (props) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const nombreCompleto = `${nombre} ${apellido}`;

    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);


    const handleChangeNombre = (e) => {
        e.preventDefault()
        const input = e.target
        const value = input.value
        setNombre(value)
    }

    const handleChangeApellido = (e) => {
        const input = e.target
        const value = input.value
        setApellido(value)
    }

    const handleChangeEmail = (e) => {
        const input = e.target
        const value = input.value
        setEmail(value)
    }

    const handleChangeTelefono = (e) => {
        const input = e.target
        const value = input.value
        setTelefono(value)
    }

    const handleConfirm = () => {
        const orden= {
            items: carrito,
            total : precioTotal(),
            buyer : {
                name : nombreCompleto,
                phone : telefono,
                email : email,
            },
            date : serverTimestamp()
        }

        const ordersCollection = collection(db, "orders")
        const consulta = addDoc(ordersCollection, orden)

        consulta
            .then((res)=>{
            console.log(res);    
            })
            .catch(error => {
            console.log(error)
            })
    }

    // /////////////////////////////////
    // ************ CARRITO ************
    // /////////////////////////////////

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
            setCantidad(cantidad + producto.cantidad);
        }else{
            setCarrito([...carrito, producto]);
            setCantidad(cantidad + producto.cantidad);
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
        return carrito.reduce((acc, item) => acc += item.cantidad * item.price, 0)
    }

    const valorDelContexto = {
        cantidad: cantidad,
        carrito : carrito,
        agregarProducto,
        eliminarProducto,       
        vaciarCarrito,
        precioTotal,
        handleChangeNombre,
        handleChangeApellido,
        handleChangeEmail,
        handleChangeTelefono,
        handleConfirm,
    }
    
    return(
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}

export default CustomProvider;