import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemCount = ({ estadoPadre, customMethod ,stock, initial, onAdd }) => {
    const [estadoHijo, setEstadoHijo] = useState(0)
    const [confirmed, setConfirmed] = useState(false)

    
    initial = 1;

    const sumar = () => {
        if (stock === 0 || estadoHijo === stock) {
            console.log("No se puede incrementar");
        } else {
            setEstadoHijo(estadoHijo + 1)
            console.log("incrementando");
            console.log(estadoHijo);
        }
    };

    const restar = () => {
        if (estadoHijo === 0) {
            console.log("No se puede decrementar");
        } else {
            setEstadoHijo(estadoHijo - 1)
            console.log("decrementando");
            console.log(estadoHijo);
        }
    };

    function comprar(){
        customMethod(estadoHijo)
        console.log("se compro "+estadoHijo+"elementos");
    }
    return (
        <div className="container d-flex borde">
            <button className="btn btn-outline-secondary" onClick={sumar}>-</button>
            <p className="m-2">cantidad: {estadoHijo}</p>
            <button className="btn btn-outline-secondary" onClick={restar}>+</button>

            <Link to={"/cart"} className="btn btn-outline-secondary" onClick={comprar}>Comprar</Link>
        </div>
    );
};

export default ItemCount;
