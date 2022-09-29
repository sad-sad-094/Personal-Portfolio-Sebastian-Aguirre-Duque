/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './normalize.css';
import App from './App';
import LandingPage from './Components/Pages/LandingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>

);


