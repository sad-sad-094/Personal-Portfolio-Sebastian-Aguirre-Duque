/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import '../../styles/Main.scss'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsMoonFill } from 'react-icons/bs';
import NavbarES from '../Modules/NavbarEs';
import { useSelector, useDispatch } from 'react-redux';
import { darkTheme, lightTheme } from '../../Redux/ThemeSlice';
import Footer from '../Modules/Footer';

function LandingPageES() {

  const theme = useSelector((state) => state.userTheme.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    if (theme === 'light') {
      dispatch(darkTheme());
    } else {
      dispatch(lightTheme());
    }
  };

  return (

    <div className={theme}>

      <NavbarES Theme={theme} />

      <section id="welcome-section" className="welcome-section">
        <div>
          <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1664558377/Personal/WebDeveloper_ctzqrb.jpg" alt="Web Developer" />
        </div>
        <div className="text-section">
          <h1>¡Hola!</h1>
          <h2>Soy Sebastian Aguirre Duque</h2>
          <h3>Desarrollador Web FrontEnd</h3>
          <p>React || JavaScript || Firebase || Git || Github || SASS || Bootstrap || HTML5 || CSS </p>
        </div>
      </section>

      <section id="projects">
        <h1 style={{ color: 'white' }}>Algunos de mis proyectos</h1>

        <div className="projects-container">

          <div className="card card-colors">
            <a href="https://sad-sad-094.github.io/Alcolirikoz-Tribute-Page_FCC/" target="_blank" rel="noreferrer">
              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1664924087/Personal/Tribute_Page1_f6j9ml.jpg" alt="Tribute Page" />
              <div className="card-container">
                <p className="title">
                  <span class="code">&lt;</span> Página Tributo Alcolirikoz <span class="code">&#47;&gt;</span>
                </p>
              </div>
            </a>
          </div>

          <div className="card card-colors">
            <a href="https://sad-sad-094.github.io/Subscription-Survey-Form-Page_FCC/" target="_blank" rel="noreferrer">
              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1664924087/Personal/Survey_Form_Page1_szgxnn.jpg" alt="Survey Form Page" />
              <div className="card-container">
                <p className="title">
                  <span class="code">&lt;</span> Formulario de Suscripción <span class="code">&#47;&gt;</span>
                </p>
              </div>
            </a>
          </div>

          <div className="card card-colors">
            <a href="https://sad-sad-094.github.io/ClashRoyale-Tarea1-Modulo3/" target="_blank" rel="noreferrer">
              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1664924087/Personal/Clash_Royale1_yhnvep.jpg" alt="Clash Royale Page" />
              <div className="card-container">
                <p className="title">
                  <span class="code">&lt;</span> Clash Royale Page <span class="code">&#47;&gt;</span>
                </p>
              </div>
            </a>
          </div>

          <div className="card card-colors">
            <a href="https://sad-sad-094.github.io/ebay-Tarea3-Modulo3/" target="_blank" rel="noreferrer">
              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1664924087/Personal/Shopping_App1_n2bk7f.jpg" alt="Shopping Page" />
              <div className="card-container">
                <p className="title">
                  <span class="code">&lt;</span> Páginas de Compras <span class="code">&#47;&gt;</span>
                </p>
              </div>
            </a>
          </div>

          <div className="card card-colors">
            <a href="https://sad-sad-094.github.io/GeoPaisesGeek-Tarea2-Modulo3/" target="_blank" rel="noreferrer">
              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1664924087/Personal/GeoPaises_Geek1_pqyhfn.jpg" alt="GeoPaises Geek" />
              <div className="card-container">
                <p className="title">
                  <span class="code">&lt;</span> GeoPaíses Geek <span class="code">&#47;&gt;</span>
                </p>
              </div>
            </a>
          </div>

          <div className="card card-colors">
            <a href="https://sad-sad-094.github.io/Live-Edu_Academia-Geek3" target="_blank" rel="noreferrer">
              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1664924087/Personal/LiveEdu_App1_iidld0.jpg" alt="LiveEdu Page" />
              <div className="card-container">
                <p className="title">
                  <span class="code">&lt;</span> LiveEdu <span class="code">&#47;&gt;</span>
                </p>
              </div>
            </a>
          </div>

          <div className="card card-colors">
            <a href="https://sad-sad-094.github.io/Buffalo-App_Academia-Geek3" target="_blank" rel="noreferrer">
              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1664924086/Personal/Buffalo_App1_bpkxow.jpg" alt="Buffalo App Page" />
              <div className="card-container">
                <p className="title">
                  <span class="code">&lt;</span> Buffalo App <span class="code">&#47;&gt;</span>
                </p>
              </div>
            </a>
          </div>

          <div className="card card-colors">
            <a href="https://monitoriasapp-academiage-779cb.web.app" target="_blank" rel="noreferrer">
              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1664924087/Personal/Monitorias_App1_iv6ih6.jpg" alt="Monitorias App Page" />
              <div className="card-container">
                <p className="title">
                  <span class="code">&lt;</span> Monitorias App <span class="code">&#47;&gt;</span>
                </p>
              </div>
            </a>
          </div>

        </div>

      </section>

      <section id="contact">
        <h1 className="section-title">Conoce mis perfiles y contáctame</h1>
        <div className="contact-section">
          <div className="social-links">
            <div className="main-container">
              <FaLinkedin className="social-icons" />
              <a href="https://www.linkedin.com/in/sebastian-aguirre-duque-05b9b082/" target="_blank" rel="noreferrer" className="" >LinkedIn</a>
            </div>
            <div className="main-container">
              <FaGithub className="social-icons" />
              <a href="https://github.com/sad-sad-094" target="_blank" rel="noreferrer" className="" >Github</a>
            </div>
            <div className="main-container">
              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1664556972/Personal/Torre.co_zumsjl.jpg" alt="Torre.co" className="torre-img" />
              <a href="https://torre.co/sadw621?column=resume&r=0eLrKAet" target="_blank" rel="noreferrer" className="" >Torre.co</a>
            </div>
            <div className="main-container">
              <MdEmail className="social-icons" />
              <a href="mailto: sadw621@gmail.com" target="_blank" rel="noreferrer" className="" >Correo</a>
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1664558376/Personal/SocialNetwork_d7uvb1.jpg" alt="Social Networks" />
          </div>
        </div>

      </section>

      <section id="roadmap">

        <h1 style={{ color: 'white' }}>Plan de acción...</h1>
        <ul className="roadmap-list">
          <li>Hacer la página adaptable para tabletas.</li>
          <li>Hacer la página adaptable para teléfonos móviles.</li>
        </ul>
        <ul className="roadmap-list">
          <li><del>Construir página para portafolio personal.</del></li>
          <li><del>Hacer cambio de tema claro/oscuro para la página.</del></li>
          <li><del>Hacer del portafolio una página bilingüe.</del></li>
        </ul>

      </section>

      <Footer Theme={theme} />

      <div className="toggler-container">
        <button type="button" className="toggler toggler-floating" onClick={toggleTheme}><BsMoonFill /></button>
      </div>

    </div>


  )

}

export default LandingPageES;
