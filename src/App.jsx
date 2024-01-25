import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import HeroSection from './components/HeroSection';

// react router
import LogIn from './components/logIn/LogIn';
import AdminPanel from './components/adminPanel/AdminPanel';
import Booking from './components/Booking';

function App() {
  return (
    <div style={{ backgroundColor: '#E9FEF8' }}>
      <Routes>
        <Route path='/' element={<HeroSection />} />

        {/* Routes for both people */}
         
        {/* end */}

        {/* route for admin */}
          <Route path='/logIn' element={<LogIn />} /> 
          <Route path='/adminPanel' element={<AdminPanel />} />
          <Route path='/booking' element={<Booking />} />
        {/* end */}
        </Routes>
    </div>
  );
}

export default App;
