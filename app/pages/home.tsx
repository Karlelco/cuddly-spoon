"use client";
import Image from "next/image";
import React from "react";
import bgimage from "@/public/image1.png";
import { motion } from "framer-motion";

function Mome() {
  return (
    <section className="flex mt-10  min-h-screen flex-col w-full  bg-slate-300 items-center justify-between">
      <p className="text-2xl md:text-6xl text-center font-bold text-black font-mono">
        Creating the Future with Mechatronics Engineering
      </p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        className="flex flex-col md:flex-row "
      >
        <Image
          src={bgimage}
          alt="Colins Chege"
          width={500}
          className="rounded-full  "
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className=" mt-10 h-full flex flex-col  md:w-1/2  m-auto "
        >
          <p className="text-xl md:text-4xl left-0 text-center font-bold text-black font-mono">
            Building the Future with Mechatronics Engineering
          </p>
          <div className="md:justify-center md:items-center m-auto ">
            <p>
              My work focuses on providing cutting-edge mechatronics engineering
              solutions that incorporate innovative technology, automation, and
              installation. I specialize in delivering custom designs to meet
              your unique requirements, providing technical support, and
              ensuring seamless project management to create a better future for
              businesses and communities.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="collapse "
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-bold text-black border-b-2 mb-4">
                My Vision
              </div>

              <div className="collapse-content">
                <p>
                  To be a leading Mechatronics Engineering company providing
                  innovative solutions to businesses and communities worldwide.
                </p>
              </div>
            </motion.div>
            <div className="collapse ">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-bold text-black border-b-2 mb-4">
                My Mission
              </div>
              <div className="collapse-content">
                <p>
                  To provide exceptional Mechatronics Engineering services that
                  deliver tailored solutions to businesses and communities,
                  empowering them to achieve their goals and realize their full
                  potential.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Mome;
