import React from 'react';
import '../components/Styles.css';
import Contact from '../assets/contact.png';
import phoneLogo from '../assets/phoneLogo.png';
import emailLogo from '../assets/emailLogo.png';
import locationLogo from '../assets/locationLogo.png';

const defaultAppointmentData = [
  {
    logo: phoneLogo,
    title: 'Call Us',
    text: '0999 775 1087'
  },
  {
    logo: locationLogo,
    title: 'Clinic Address',
    text: '241 Governor Drive Langkaan 1 Dasmariñas, Philippines'
  },
  {
    logo: emailLogo,
    title: 'Email Us',
    text: 'acorelyinginclinic@gmail.com'
  },
];

const Appointment = ({ appointmentData = defaultAppointmentData }) => {
  return (
    <>
      <div className='pt-10'>
        <h1 className="pt-10 dark:text-white justify-center text-center my-4 servicetitle sm:justify-center">
          BOOK AN APPOINTMENT NOW!
        </h1>

        <div className='flex justify-center'>
          <img src={Contact} alt="Contact" style={{ height: '40rem' }} />
        </div>
        <div className='flex justify-center'>
          <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
            <span className="paragph group-hover:text-white">
              Click Here!
            </span>
          </button>
        </div>
        <div className='flex justify-center pt-1'>
          <p className='paragph'>Schedule your clinic appointment today!</p>
        </div>
        {/* div for logo */}
        <section className="rocket flex flex-col sm:flex-row justify-center items-center gap-8 my-8">
          {appointmentData.map((data, index) => (
            <div key={index} className="mx-3 cursor-pointer transition-all duration-500 hover:translate-y-2 w-80 h-40 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
              <img src={data.logo} alt={data.title} className="stroke-purple-300 shrink-0 " height={50} width={20} />
              <div>
                <span className="paragph text-purple-300">{data.title}</span>
                <p className="paragph line-clamp-3">{data.text}</p>
              </div>
            </div>
          ))}
        </section>
        {/* end */}
      </div>
    </>
  );
}

export default Appointment;
