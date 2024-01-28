import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'firebase/firestore';

// components
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Schedule from './components/Schedule';
import Location from './components/Location';
import Appointment from './components/Appointment';

// react router
import LogIn from './components/logIn/LogIn';
import Booking from './components/Booking';
import Appointments from './components/adminPanel/Appointments'
function App() {
  return (
    <div style={{ backgroundColor: '#E9FEF8' }}>
      <Routes>
        <Route path='/' element={<HeroSection />} />
        


        {/* route for admin */}
          <Route path='/logIn' element={<LogIn />} /> 
          <Route path='/booking' element={<Booking />} />
          <Route path='/appointments' element={<Appointments />} />

        {/* end */}
        </Routes>
    </div>
  );
}

export default App;
