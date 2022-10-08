/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';

function Navbar(theme) {

  return (

    <div className={theme}>
      <nav className="navbar navbar-background" id="navbar">
        <div className="nav-header">
          <img src="https://cdn-icons-png.flaticon.com/512/644/644626.png" alt="favicon" />
          <h1>Sebastian's Personal Portfolio</h1>
        </div>
        <div className="nav-access">
          <ul className="nav-list">
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
