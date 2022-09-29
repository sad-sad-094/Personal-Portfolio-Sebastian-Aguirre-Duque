/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import '../../styles/Main.scss'
import Navbar from '../Modules/Navbar';

function LandingPage() {

  return (

    <>
      <Navbar />
      <section id="welcome-section">
        <h1>Hi world!</h1>
      </section>
      <section id="projects">
        <h1>Hi section</h1>
      </section>
      <section id="contact">
        <h1>Hi section</h1>
      </section>
    </>


  )

}

export default LandingPage;
