import React from "react";
import CartWidget from "./CartWidget";

const NavBar = ({type}) => {
    if(type == "header"){
        return (
            <>
            <div className="collapse navbar-collapse" id="navbarsExample07">
                <ul className="navbar-nav me-auto mb-2 mb-md-0 ">
                    <li><a href="" className="nav-link px-2 link-dark">Home</a></li>
                    <li><a href="" className="nav-link px-2 link-dark">Productos</a></li>
                    <li><a href="" className="nav-link px-2 link-dark">Nosotros</a></li>
                    <li><a href="" className="nav-link px-2 link-dark">Contacto</a></li>
                    <li><a href="" className="nav-link px-2 link-dark">Ayuda</a></li>
                </ul>
            </div>
            <CartWidget />
        </>
        )
    }else{
        return (
            <div className="navbar navbar-expand-lg " aria-label="Eighth navbar example">
                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0 ">
                        <li><a href="" className="nav-link px-2 link-dark">Home</a></li>
                        <li><a href="" className="nav-link px-2 link-dark">Productos</a></li>
                        <li><a href="" className="nav-link px-2 link-dark">Nosotros</a></li>
                        <li><a href="" className="nav-link px-2 link-dark">Contacto</a></li>
                        <li><a href="" className="nav-link px-2 link-dark">Ayuda</a></li>
                    </ul>
                </div>
            </div>
        )
    }

  }

export default NavBar;