import React from "react";
import CartWidget from "./CartWidget";
function NavBar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light m-2" aria-label="Eighth navbar example">
            <div className="container">
                <a href="index.html" target="">
                    <h3>ciclopartes</h3>
                    </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
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
            <CartWidget />

        </nav>
    );

  }

export default NavBar;