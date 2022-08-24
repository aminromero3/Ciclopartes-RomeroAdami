import React from "react";
import { useState, useContext } from "react";
import { contexto } from "./CartContext"
import { NavLink } from "react-router-dom";


function CartWidget() {

    const { cantidad } = useContext(contexto)

    return(
        <>
            <NavLink to="/cart">
                <span className="material-symbols-outlined">
                    shopping_cart
                </span>
                {cantidad}
            </NavLink>
            
        </>
    )
}

export default CartWidget;