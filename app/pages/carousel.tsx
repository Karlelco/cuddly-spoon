'use client';
import Image from "next/image";
import React from "react";
import imagebg from "@/public/image2.png";
import { Button } from "@/components/ui/button";
import { BiCheck } from "react-icons/bi";
import { motion } from "framer-motion";

function Carousel() {
  return (
    <main className="bg-slate-200 mb-6 px-6 py-12">
      <section className=" md:mt-10 md:px-10 md:py-20">
        <div className="px-4 md:px-24 m-auto">
          <div className="flex flex-col  gap-4 m-auto md:flex-row items-center justify-center px-2 ">
            <p className="md:w-1/2 text-2xl md:text-5xl ">
              Innovative Mechatronics Engineering Solutions
            </p>
            <p className=" md:w-1/2">
              I have worked on several projects, including designing and
              implementing control systems for industrial automation, developing
              custom robotics solutions, and providing technical support to
              clients. My work has led to increased efficiency, improved
              quality, and reduced costs for businesses and communities.
            </p>
          </div>
        </div>
        <div className="mt-20">
          <div className="carousel  carousel-center  p-4 space-x-4 bg-sky-200 rounded-box">
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                className="rounded-box "
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                className="rounded-box"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-sky-100 flex flex-col   md:flex-row justify-center items-center   min-h-screen">
        <div className="w-full items-center justify-center px-2  md:max-w-1/2 ">
          <motion.div
              initial={{ opacity: 0, x: 100 , y: 100}}
              whileInView={{ opacity: 1, x: 0 , y:0 }}
            transition={{ delay: 0.4 }}
            className="bg-white relative left-10 z-20  shadow-sky-500 top-60 w-fit rounded-full px-4 py-2 justify-start">
            <p className="font-bold  text-sm">Leadership & Communication</p>
            <p className="text-sm">5 Years</p>
          </motion.div>
          <div>
            <Image
              src={imagebg}
              alt=""
              width={300}
              className=" relative z-10"
            />
          </div>
          <motion.div
              initial={{ opacity: 0, x: 100 , y:100 }}
              whileInView={{ opacity: 1, x: 0, y:0 }}
          transition={{ delay: 0.77}}
           className="bg-white w-fit  relative z-10 md:left-60 shadow-sky-500  bottom-40 rounded-full px-4 py-2 justify-end">
            <p className="font-bold text-lg">Industrial Automation</p>
            <p className="text-sm">5 Years</p>
          </motion.div>
        </div>
        <div className=" px-2 md:px-10 md:py-20 bg-blue-600  rounded-lg md:h-2/3">
          <div className="  justify-center items-center gap-4 space-y-4  text-left text-white ">
            <p className="text-xl md:text-4xl font-semibold font-serif">
              Let's Work Together
            </p>
            <p>
              If you have any questions or would like to discuss a project,
              please don’t hesitate to contact me. I’m always available to
              provide advice or collaborate on innovative mechatronics
              engineering solutions.
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <BiCheck /> Customized Mechatronics Engineering Solutions
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <BiCheck />
              Expert Technical Support
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <BiCheck />
              Efficient Project Management
            </p>
          </div>
          <Button className=" hidden md:flex mt-20 justify-center mb-10" variant='outline'>
            <a href="mailto: " className="text-blue-700">
              Contact Me
            </a>
          </Button>
        </div>
      </section>
      
    </main>
  );
}

export default Carousel;
