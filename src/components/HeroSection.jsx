import { useState } from 'react'
import '../components/Styles.css'
import Services from './Services';
import Schedule from './Schedule';
import Location from './Location';
import Appointment from './Appointment';
import Navbar from './Navbar';
import Herographic from '../assets/medicalgraphic.png'
const HeroSection = () => {
  return (
    <>
            <Navbar />
        <div className="flex flex-col-reverse lg:flex-row">
            <div className="flex flex-col justify-center items-start w-full lg:w-1/2 px-6 ">
              <h1 className=" dark:text-white my-4 herotitle sm:text-center">
              A-Core Medical & Maternity Lying-In Clinic
              </h1>
            </div>
            <div className='lg:w-1/2 lg:pl-6'>
              <img src={Herographic} alt="medical graphic" className='herographic'  />
            </div>
        </div>

        <Services />
        <Schedule />
        <Location />
        <Appointment />
    </>
  )
}

export default HeroSection
