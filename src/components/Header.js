import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Header(){
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" aria-label="Eighth navbar example">
                <div className="container">
                    {/* crear el logo con un link al home */}
                    <Link to="/" className="navbar-brand">
                        <img src="./logo2.png" className="logoHeader" alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavBar 
                    type="header" />
                </div>
            </nav>
        </header>
    );
  }

export default Header;