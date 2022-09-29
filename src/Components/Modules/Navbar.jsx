/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';

function Navbar() {

  return (

    <nav className="navbar" id="navbar">
      <div className="nav-header">
        <h1>Sebastian's Personal Portafolio</h1>
      </div>
      <div className="nav-access">
        <ul className="nav-list">
          <li><a href="#contact">Contact Me</a></li>
          <li><a href="#projects">My Projects</a></li>
          <li><a href="#welcome-section">About Me</a></li>
        </ul>
      </div>
    </nav>

  )

}

export default Navbar;
