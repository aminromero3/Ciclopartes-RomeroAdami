import React from 'react'
import NavBar from './NavBar'

function Footer() {
    return (
        <footer>
            <div className='d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top'>
            <NavBar 
                type="footer"/>
            </div>
            <div className='d-flex flex-wrap justify-content-center align-items-center py-1 my-4 '>
                <span className="text-muted">Todos los derechos reservados &copy;2022 - Desarrollado por: Amin Romero</span>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/" target="blank"><img className="bi" width="45" height="45" src="./facebook.png" alt="facebook"></img></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/" target="blank"><img className="bi" width="45" height="45" src="./instagram.png" alt="instagram"></img></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer