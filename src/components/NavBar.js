import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = ({type}) => {

    if(type === "header"){
        return (
            <>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navbar-nav nav me-auto mb-2 mb-md-0">
                        <Nav.Link href="/" className="nav-link px-2 link-dark">Home</Nav.Link>
                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/ruta" className="nav-link px-2 link-dark">Bicicletas de Ruta</NavDropdown.Item>
                            <NavDropdown.Item href="/paseo" className="nav-link px-2 link-dark">Bicicletas de Paseo</NavDropdown.Item>
                            <NavDropdown.Item href="/montaña" className="nav-link px-2 link-dark">Bicicletas de Montaña</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/nosotros" className="nav-link px-2 link-dark">Nosotros</Nav.Link>
                        <Nav.Link href="/contacto" className="nav-link px-2 link-dark">Contacto</Nav.Link>
                        <Nav.Link href="/ayuda" className="nav-link px-2 link-dark">Ayuda</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
                </>
        )
    }else{
        return (
            <div className="navbar navbar-expand-lg " aria-label="Eighth navbar example">
                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0 ">
                        <li><Link to="/home" className="nav-link px-2 link-dark">Home</Link></li>
                        <li><Link to="/productos" className="nav-link px-2 link-dark">Productos</Link></li>
                        <li><Link to="/nosotros" className="nav-link px-2 link-dark">Nosotros</Link></li>
                        <li><Link to="/contacto" className="nav-link px-2 link-dark">Contacto</Link></li>
                        <li><Link to="/ayuda" className="nav-link px-2 link-dark">Ayuda</Link></li>
                    </ul>
                </div>
            </div>
        )
    }

  }

export default NavBar;