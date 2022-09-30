/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import '../../styles/Main.scss'
import Navbar from '../Modules/Navbar';

function LandingPage() {

  return (

    <>
      <Navbar />
      <section id="welcome-section" className="welcome-section">
        <h1>Hi!</h1>
        <h2>I'm Sebastian Aguirre Duque</h2>
        <h3>FrontEnd Web Developer</h3>
        <p>React || JavaScript || Firebase || Git || Github || SASS || Bootstrap || HTML5 || CSS </p>
      </section>

      <section id="projects">
        <h1>These are some of my projects</h1>

      </section>
      
      <section id="contact">
        <h1>Hi section</h1>
      </section>
    </>


  )

}

export default LandingPage;
