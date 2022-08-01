import React from "react";
import NavBar from "./NavBar";

function Header(){
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light m-2" aria-label="Eighth navbar example">
            <div className="container">
                <a href="index.html" target="">
                    <h3>ciclopartes</h3>
                    </a>
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