/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar(prop) {

  const navigation = useNavigate();

  return (

    <div className={prop.theme}>
      <nav className="navbar navbar-background" id="navbar">
        <div className="nav-header">
          <img src="https://cdn-icons-png.flaticon.com/512/644/644626.png" alt="favicon" />
          <h1>Sebastian's Personal Portfolio</h1>
        </div>
        <div className="nav-access">
          <ul className="nav-list">
            <li><img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1665614471/Personal/spain_gawrb1.png" alt="español" onClick={() => navigation("/ES/landing")} /></li>
            <li><a href="#contact">Contact Me</a></li>
            <li><a href="#projects">My Projects</a></li>
            <li><a href="#welcome-section">About Me</a></li>
          </ul>
        </div>
      </nav>
    </div>

  )

}

export default Navbar;
