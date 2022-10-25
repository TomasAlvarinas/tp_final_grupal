import React from "react"
import { navButtos } from "../../data/productos"
import '../NavBarPP/navbar.css'

export const NavBar = () => {
    return (
        
        /*<nav className='navbar navbar-expand-lg navbar-light bg-light fixed top'id="navegador">
        <div className='container-fluid'>
            <a className='navbar-brand' href='#'>Kalm Deco</a>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                    {navButtos.map(
                        ({text, link})=> (<li key={text} className='nav-item'>
                            <a className="nav-link" aria-current='page' href={link} target='_blanck'>{text}</a>
                        </li>)
                    )}
                    
                </ul>
            </div>
        </div>
    </nav> */

    <div className="menu">
        <nav className="options">
           <img src="src\components\NavBarPP\img\logo.jfif" alt="img logo"></img>
           <h1><center>Bienvenidos a Kalm Deco Home</center></h1>
           <h2><center>Ideas para hacer tu casa mas linda</center></h2>
        </nav>

    <nav className="navbar navbar-light  fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="./index.html">Home</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Shop
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                      <li><a className="dropdown-item" href="https://www.canva.com/design/DAE8e10OqA4/pHJ3ld7sJOOhVf-1XPE2uQ/view?utm_content=DAE8e10OqA4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1">Catálogo</a></li>
                      <li><a className="dropdown-item" href="./Carrito.html">Carrito</a></li>
                      <li>
                        <hr className="dropdown-divider"></hr>
                      </li>
                      <li><a className="dropdown-item" href="#">Cerrar</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="./Page Contacto.html">Contacto</a>
                  </li>
                </ul>
                
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Busca por productos" aria-label="Search"></input>
                  <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
              </div>
            </div>
          </div>
        </nav>

        </div>



)
}

