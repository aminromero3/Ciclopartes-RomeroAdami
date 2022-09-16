import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(){
    return (

        <header>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img src="./logo2.png" className="logoHeader img-fluid" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <NavBar type="header" />
                </Container>
            </Navbar>
        </header>
    );
  }

export default Header;