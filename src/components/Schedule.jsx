import React from 'react';
import schedgraphic from '../assets/schedule.png';

const schedData = [
  {
    day: 'Monday',
    service: 'MIDWIFE CHECK-UP',
    typeOfService: '',
    time: '8am - 5pm',
  },
  {
    day: 'Tuesday',
    service: 'PEDIA CHECK-UP & VACCINES',
    typeOfService: 'By Appointment',
    time: '3pm',
  },
  {
    day: 'Wednesday',
    service: 'OB-GYNE CONSULTATION',
    typeOfService: 'By Appointment',
    time: '9:00 am - 11:00 am',
  },
  {
    day: 'Thursday',
    service: 'MIDWIFE CHECK-UP',
    typeOfService: '',
    time: '8am - 5pm',
  },
  {
    day: 'Friday',
    service: 'MIDWIFE CHECK-UP',
    typeOfService: '',
    time: '8am - 2pm',
  },
  {
    day: 'Saturday',
    service: 'MIDWIFE CHECK-UP',
    typeOfService: '',
    time: '8am - 2pm',
  },
];

const Schedule = () => {
  return (
    <>

      <div>
        <h1 className="pt-10 dark:text-white justify-center text-center my-4 servicetitle sm:justify-center">
          Schedules
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row">
        {schedData.map((item, index) => (
          <div key={index} className="flex flex-col justify-center w-full lg:w-1/2 px-6">
            <p className="paragph text-center dark:text-white justify-center my-4 sm:justify-center">
              {item.day}
            </p>
            <p className="paragph text-center dark:text-white justify-center my-4 sm:justify-center">
              {item.service}
            </p>
            <p className="paragph text-center dark:text-white justify-center my-4 sm:justify-center">
              {item.time}
            </p>
          </div>
        ))}
        {/* <div className="lg:w-1/2 lg:pl-6">
          <img src={schedgraphic} alt="medical graphic" className="herographic" />
        </div> */}
      </div>
    </>
  );
};

export default Schedule;
