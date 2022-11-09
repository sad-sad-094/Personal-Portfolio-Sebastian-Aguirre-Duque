/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import '../../styles/Main.scss'
import Navbar from '../Modules/Navbar';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
// import { BsMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { darkTheme, lightTheme } from '../../Redux/ThemeSlice';
import Footer from '../Modules/Footer';
import { darkToggler, lightToggler } from '../../Redux/TogglerSlice';

function LandingPage() {

  const theme = useSelector((state) => state.userTheme.theme);
  const toggler = useSelector((state) => state.changeToggler.toggler);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    if (theme === 'light') {
      dispatch(darkTheme());
      dispatch(darkToggler());
    } else {
      dispatch(lightTheme());
      dispatch(lightToggler());
    }
  };

  return (

    <div className={theme}>

      <Navbar Theme={theme} />

      <section id="welcome-section" className="welcome-section">
        <div>
          <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1664558377/Personal/WebDeveloper_ctzqrb.jpg" alt="Web Developer" />
        </div>
        <div className="text-section">
          <h1>Hi!</h1>
          <h2>I'm Sebastian Aguirre Duque</h2>
          <h3>FrontEnd Web Developer</h3>
          <p>React || JavaScript || Firebase || Git || Github || SASS || Bootstrap || HTML5 || CSS </p>
        </div>
      </section>

      <section id="projects">
        <h1 style={{ color: 'white' }}>These are some of my projects</h1>

        <div className="projects-container">

          <div className="card card-colors">
            <a href="https://sad-sad-094.github.io/Alcolirikoz-Tribute-Page_FCC/" target="_blank" rel="noreferrer">
              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1664924087/Personal/Tribute_Page1_f6j9ml.jpg" alt="Tribute Page" />
              <div className="card-container">
                <p className="title">
                  <span class="code">&lt;</span> Alcolirikoz Tribute Page <span class="code">&#47;&gt;</span>
                </p>
              </div>
            </a>
          </div>

          <div className="card card-colors">
            <a href="https://sad-sad-094.github.io/Subscription-Survey-Form-Page_FCC/" target="_blank" rel="noreferrer">
              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1664924087/Personal/Survey_Form_Page1_szgxnn.jpg" alt="Survey Form Page" />
              <div className="card-container">
                <p className="title">
                  <span class="code">&lt;</span> Subscription Survey Form Page <span class="code">&#47;&gt;</span>
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
                  <span class="code">&lt;</span> Shopping Page <span class="code">&#47;&gt;</span>
                </p>
              </div>
            </a>
          </div>

          <div className="card card-colors">
            <a href="https://sad-sad-094.github.io/GeoPaisesGeek-Tarea2-Modulo3/" target="_blank" rel="noreferrer">
              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1664924087/Personal/GeoPaises_Geek1_pqyhfn.jpg" alt="GeoPaises Geek" />
              <div className="card-container">
                <p className="title">
                  <span class="code">&lt;</span> GeoPaíses Geek Page <span class="code">&#47;&gt;</span>
                </p>
              </div>
            </a>
          </div>

          <div className="card card-colors">
            <a href="https://sad-sad-094.github.io/Live-Edu_Academia-Geek3" target="_blank" rel="noreferrer">
              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1664924087/Personal/LiveEdu_App1_iidld0.jpg" alt="LiveEdu Page" />
              <div className="card-container">
                <p className="title">
                  <span class="code">&lt;</span> LiveEdu Page <span class="code">&#47;&gt;</span>
                </p>
              </div>
            </a>
          </div>

          <div className="card card-colors">
            <a href="https://sad-sad-094.github.io/Buffalo-App_Academia-Geek3" target="_blank" rel="noreferrer">
              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1664924086/Personal/Buffalo_App1_bpkxow.jpg" alt="Buffalo App Page" />
              <div className="card-container">
                <p className="title">
                  <span class="code">&lt;</span> Buffalo App Page <span class="code">&#47;&gt;</span>
                </p>
              </div>
            </a>
          </div>

          <div className="card card-colors">
            <a href="https://monitoriasapp-academiage-779cb.web.app" target="_blank" rel="noreferrer">
              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1664924087/Personal/Monitorias_App1_iv6ih6.jpg" alt="Monitorias App Page" />
              <div className="card-container">
                <p className="title">
                  <span class="code">&lt;</span> Monitorias App Page <span class="code">&#47;&gt;</span>
                </p>
              </div>
            </a>
          </div>

        </div>

      </section>

      <section id="contact">
        <h1 className="section-title">Know my social networks and contact me</h1>
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
              <MdEmail className="social-icons" />
              <a href="mailto: sadw621@gmail.com" target="_blank" rel="noreferrer" className="" >Email</a>
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1664558376/Personal/SocialNetwork_d7uvb1.jpg" alt="Social Networks" />
          </div>
        </div>

      </section>

      <section id="roadmap">

        <h1 style={{ color: 'white' }}>Roadmap...</h1>
        <ul className="roadmap-list">
          <li>Make page responsive for tablet devices.</li>
          <li>Make page responsive for phone devices.</li>
        </ul>
        <ul className="roadmap-list">
          <li><del>Make personal portfolio webpage.</del></li>
          <li><del>Make page's toggler dark/light theme.</del></li>
          <li><del>Make personal portfolio bilingual page.</del></li>
        </ul>

      </section>

      <Footer Theme={theme} />

      <div className="toggler-container">
        <button type="button" className="toggler toggler-floating toggler-background" onClick={toggleTheme}>
          {toggler}
        </button>
      </div>

    </div>

  )

}

export default LandingPage;
