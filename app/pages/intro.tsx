'use client';
import Image from 'next/image';
import React from 'react'
import bgimage from '@/public/image1.png';

function Intro() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between px-3 shadow-blue-400 md:px-24 py-12">
      <p className="text-2xl md:text-6xl text-center font-bold text-black font-mono  ">
        Innovative Mechatronics Engineering Solutions
      </p>
      <Image
        src={bgimage}
        alt="Colins Chege"
        width={300}
        className="rounded-full  "
      />
      <div className="flex flex-col md:flex-row  mt-10 w-full h-[10rem] justify-around items-center  md:mr-20 ">
        <div>
          <p className="font-bold text-3xl">Haco Industries</p>
          <p>1 Year Industrial Experience</p>
        </div>
        <div>
          <p className="font-bold text-3xl">Centurian Systems</p>
          <p>1 Year Training</p>
        </div>
      </div>
    </section>
  );
}

export default Intro