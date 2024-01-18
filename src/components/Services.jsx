import React from 'react';
import service from '../assets/services.png';
import '../components/Styles.css';

const Parent = () => {
    const servicesData = [
        {
            name: 'PRENATAL CHECK-UP by OB-GYNE',
            description: 'Every Wednesday and Friday 9am to 11am (By Appointment).',
            serviceNumber: '01',
        },
        // Add more services as needed
        {
            name: 'PRENATAL CHECK-UP by MIDWIFE',
            description: 'Monday, Wednesday & Friday (1pm - 5pm) Tuesday, Thursday, Saturday, & Sunday (8am - 5pm)',
            serviceNumber: '02',
        },
                {
            name: 'FAMILY PLANNING',
            description: 'Family planning services at A-core provide a comprehensive and compassionate approach to reproductive health',
            serviceNumber: '03',
        },
        
    ];

    const serviceName = "PRENTAL CHECK-UP by OB-GYNE";
    const aboutService = "Every Wednesday and Friday 9am to 11am (By Appointment)";

    return <Services serviceName={serviceName} aboutService={aboutService} servicesData={servicesData} />;
};

const Services = ({ servicesData }) => {
    return (
        <>
            <div style={{ backgroundColor: '#FEE9FF' }}>
                <h1 className="dark:text-white justify-center text-center my-4 servicetitle sm:justify-center">
                    Our Services
                </h1>
                <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/2">
                        <img src={service} alt="medical graphic" className='herographic' />
                    </div>
                    <div className="flex flex-col justify-center items-start w-full lg:w-1/2 px-6 tracking-wide">
                        <p className="paragph text-center dark:text-white justify-center my-4  sm:justify-center">
                            At A-Core Medical & Maternity Lying-In Clinic, our unwavering commitment to providing exceptional healthcare services is at the heart of our mission. With a team of dedicated and compassionate professionals, we prioritize the well-being of our patients throughout their medical and maternity journey. Our state-of-the-art facilities and personalized care approach ensure that each individual receives comprehensive and tailored services, fostering a safe and comfortable environment. From medical consultations to maternity care, we strive to exceed expectations, empowering our community with the highest standards of healthcare. Your health is our priority, and at A-Core, we are here to support you every step of the way.
                        </p>
                    </div>
                </div>

                {/* services */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-8 my-8">
                    {servicesData.map((service, index) => (
                        <div key={index} className="service-card w-64 lg:w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
                                            <svg
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                                stroke="#000000"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                className="text-5xl h-12 w-12 stroke-gray-800 group-hover:stroke-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
                                                <line y2="21" x2="16" y1="21" x1="8"></line>
                                                <line y2="21" x2="12" y1="17" x1="12"></line>
                                            </svg>  
                            <p className="font-bold text-2xl group-hover:text-white text-black/80">{service.name}</p>
                            <p className="text-gray-400 text-sm">{service.description}</p>
                            <p style={{ WebkitTextStroke: "1px gray", WebkitTextFillColor: "transparent" }} className="text-5xl font-bold self-end">
                                {service.serviceNumber}
                            </p>
                        </div>
                    ))}
                </div>
                
            </div>
        </>
    );
};

export default Parent;

