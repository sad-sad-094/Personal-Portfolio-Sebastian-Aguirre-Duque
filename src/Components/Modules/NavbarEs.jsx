/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavbarES(prop) {

  const navigation = useNavigate();

  return (

    <div className={prop.theme}>
      <nav className="navbar navbar-background" id="navbar">
        <div className="nav-header">
          <img src="https://cdn-icons-png.flaticon.com/512/644/644626.png" alt="favicon" />
          <h1>Portafolio Personal de Sebastian</h1>
        </div>
        <div className="nav-access">
          <ul className="nav-list">
            <li><img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1665614471/Personal/united-kingdom_t8wwke.png" alt="english" onClick={() => navigation("/")} /></li>
            <li><a href="#contact">Contáctame</a></li>
            <li><a href="#projects">Mis Proyectos</a></li>
            <li><a href="#welcome-section">Acerca de Mí</a></li>
          </ul>
        </div>
      </nav>

    </div>

  )

}

export default NavbarES;
