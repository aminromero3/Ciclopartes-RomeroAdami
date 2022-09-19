import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {

    const [contador, setContador] = useState(1)

    const sumar = () => {
        if (stock === 0 || contador === stock) {
            setContador(contador)
            } else {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        contador === 1 ? setContador(contador) : setContador(contador - 1)       
    }
    const agregarAlCarrito = () => {
        onAdd(contador)
    }

    return (
        <div className="container itemCount">
            <div className="m-2">
                <button className=" w-10 h-10 text-2xl md:w-8 md:h-8 md:text-sm cursor-pointer text-center border pb-.5hover:bg-gray-900 hover:text-white focus:outline-none" onClick={restar}>-</button>
                <small className="m-2">Cantidad: {contador}</small>
                <button className="w-10 h-10 text-2xl md:w-8 md:h-8 md:text-sm cursor-pointer text-center border pb-.5hover:bg-gray-900 hover:text-white focus:outline-none" onClick={sumar}>+</button>
            </div>
            <div>
                <Link to="/cart"><button className="buttonBuy m-2" onClick={agregarAlCarrito}>Comprar ahora</button></Link>
            </div>
            <div>
                <button className="buttonAddToCart m-2" onClick={agregarAlCarrito}>Agregar al carrito</button>
            </div>
            
        </div>
    )
}

export default ItemCount;
