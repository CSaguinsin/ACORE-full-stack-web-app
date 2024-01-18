import React from 'react'
import schedgraphic from '../assets/schedule.png'

const Schedule = () => {
  return (
    <>
            <div>
            <h1 className="dark:text-white justify-center text-center my-4 servicetitle sm:justify-center">
                    Our Services
                </h1>
            </div>
    <div className="flex flex-col sm:flex-row">
            <div className='lg:w-1/2 lg:pl-6'>
              <img src={schedgraphic} alt="medical graphic" className='herographic'  />
            </div>
            <div className="flex flex-col justify-center w-full lg:w-1/2 px-6">
                        <p className="paragph text-center dark:text-white justify-center my-4  sm:justify-center">
                            At A-Core Medical & Maternity Lying-In Clinic, our unwavering commitment to providing exceptional healthcare services is at the heart of our mission. With a team of dedicated and compassionate professionals, we prioritize the well-being of our patients throughout their medical and maternity journey. Our state-of-the-art facilities and personalized care approach ensure that each individual receives comprehensive and tailored services, fostering a safe and comfortable environment. From medical consultations to maternity care, we strive to exceed expectations, empowering our community with the highest standards of healthcare. Your health is our priority, and at A-Core, we are here to support you every step of the way.
                        </p>
            </div>
    </div>
    </> 
  )
}

export default Schedule