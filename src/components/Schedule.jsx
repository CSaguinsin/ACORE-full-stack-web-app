import React from 'react';
import schedgraphic from '../assets/schedule.png';
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

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
      <div id='schedule'>
        <h1 className="pt-10 dark:text-white justify-center text-center my-4 servicetitle sm:justify-center">
          Schedules
        </h1>
      </div>
      <div className="flex justify-center">
  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
    {schedData.map((item, index) => (
      <div key={index} className="group flex flex-col justify-start items-start gap-2 w-96 sm:w-full duration-500 relative rounded-lg p-4 bg-purple-500 hover:-translate-y-2 hover:shadow-xl shadow-purple-400">
        <div
          className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-purple-400"
          alt="image here"
        />
        <div className="paragph">
          <h2 className="text-2xl font-bold mb-2 text-white">{item.day}</h2>
          <p className="text-gray-200 line-clamp-3">{item.service}</p>
        </div>
        <div className='paragph'>
          <p className="text-gray-200 line-clamp-3">{item.typeOfService}</p>
          <p className="text-gray-200 line-clamp-3">{item.time}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      <div className="flex justify-center">
        <Image src={schedgraphic} width={500} height={500} />
      </div>
    </>
  );
};

export default Schedule;
