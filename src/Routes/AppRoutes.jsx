/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../Components/Pages/LandingPage';
import LandingPageES from '../Components/Pages/LandingPageES';

function AppRoutes() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ES/landing" element={<LandingPageES />} />
      </Routes>
    </BrowserRouter>

  )

}

export default AppRoutes;
