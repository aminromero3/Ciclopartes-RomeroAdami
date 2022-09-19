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
                        <Nav.Link><Link to="/" className="nav-link px-2 link-dark">Home</Link></Nav.Link>
                        <NavDropdown title="Productos" className="nav-link link-dark" id="collasible-nav-dropdown">
                            <NavDropdown.Item><Link to="/ruta" className="nav-link link-dark">Bicicletas de Ruta</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/paseo" className="nav-link px-2 link-dark">Bicicletas de Paseo</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/montana" className="nav-link px-2 link-dark">Bicicletas de Montaña</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link><Link to="/nosotros" className="nav-link px-2 link-dark">Nosotros</Link></Nav.Link>
                        <Nav.Link><Link to="/ayuda" className="nav-link px-2 link-dark">Ayuda</Link></Nav.Link>
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
                        <li><Link to="/" className="nav-link px-2 link-dark">Home</Link></li>
                        <li><Link to="/products" className="nav-link px-2 link-dark">Productos</Link></li>
                        <li><Link to="/nosotros" className="nav-link px-2 link-dark">Nosotros</Link></li>
                        <li><Link to="/ayuda" className="nav-link px-2 link-dark">Ayuda</Link></li>
                    </ul>
                </div>
            </div>
        )
    }

  }

export default NavBar;