import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'firebase/firestore';

// components
import HeroSection from './components/HeroSection';

// react router
import LogIn from './components/logIn/LogIn';
import AdminPanel from './components/adminPanel/AdminPanel';
import Booking from './components/Booking';
import Appointments from './components/adminPanel/Appointments'
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
          <Route path='/appointments' element={<Appointments />} />

        {/* end */}
        </Routes>
    </div>
  );
}

export default App;
