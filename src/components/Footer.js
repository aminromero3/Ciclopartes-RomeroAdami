import React from 'react'
import NavBar from './NavBar'

function Footer() {
    return (
      <>
        <NavBar 
            type="footer"/>
        <div className='d-flex'>
            <div class="col-md-4 d-flex">
                    <span class="text-muted">Todos los derechos reservados &copy;2022</span>
            </div>
        
            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex ">
                <li class="ms-3"><a class="text-muted" href="https://www.facebook.com/" target="_blank"><img class="bi" width="45" height="45" src="./facebook.png" alt="facebook"></img></a></li>
                <li class="ms-3"><a class="text-muted" href="https://www.instagram.com/" target="_blank"><img class="bi" width="45" height="45" src="./instagram.png" alt="instagram"></img></a></li>
            </ul>
        </div>
      </>
    )
}

export default Footer