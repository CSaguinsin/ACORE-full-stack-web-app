import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

// react router
import LogIn from './components/logIn/LogIn';
import Register from './components/register/Register';
import AdminPanel from './components/adminPanel/AdminPanel';

function App() {
  return (
    <div style={{ backgroundColor: '#E9FEF8' }}>
      <Routes>
        <Route path='/' element={<HeroSection />} />

        {/* Routes for both people */}
          <Route path='/logIn' element={<LogIn />} />
          <Route path='/register' element={<Register />} />
        {/* end */}

        {/* route for admin */}
          <Route path='/adminPanel' element={<AdminPanel />} />
        {/* end */}
        </Routes>
    </div>
  );
}

export default App;
