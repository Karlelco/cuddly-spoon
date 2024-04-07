'use client'
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react'

function Skill() {
    const [progress, setProgress] = React.useState(13);

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 5000);
      return () => clearTimeout(timer);
    }, []);
 

  
  return (
    <section className="flex min-h-screen flex-col  bg-blue-100 items-center justify-between">
      <div className="flex flex-col md:flex-row md:h-[20rem] items-center justify-center">
        <p className="text-5xl w-full md:w-1/2 text-center font-extrabold text-black font-mono">
          Expertise and Skills
        </p>
        <p className="md:w-1/2 px-10 text-gray-700 md:pr-20">
          As a Mechatronics Engineer, I bring a unique skill set that combines
          mechanical, electrical, and computer engineering. With strong
          leadership and communication skills, I can provide project management,
          technical support, and automation and installation services to ensure
          seamless and efficient operation of systems.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12 py-10 text-gray-600">
        <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="card h-96 bg-blue-200 ">
          <div className="card-body border hover:border-blue-600 rounded-xl">
            <p className="text-sky-500">Internship at Haco Industries</p>
            <h2 className="card-title">Haco Industries</h2>
            <p>
              During my internship at Haco Industries, I gained hands-on
              experience in industrial automation, installation, and project
              management. I also honed my communication and leadership skills by
              working on a team and collaborating with different stakeholders.
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-link">Read more</button>
            </div>
          </div>
        </motion.div>
        <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }} className="card h-96 bg-sky-200 ">
          <div className="card-body border hover:border-blue-600 rounded-xl">
            <p className="text-blue-500">Mechatronics Engineering Coursework</p>
            <h2 className="card-title">Kiambu National Polytechnic</h2>
            <p>
              My coursework in Mechatronics Engineering provided me with a
              strong foundation in mechanical, electrical, and computer
              engineering. I gained practical experience in design, control
              systems, and robotics, among other areas.
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-link">Read more</button>
            </div>
          </div>
        </motion.div>
        <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }} className="card h-96 bg-sky-200 ">
          <div className="card-body border hover:border-blue-600 rounded-xl">
            <p className="text-blue-500">Industrial Mechatronics Studies</p>
            <h2 className="card-title">Centurian Systems</h2>
            <p>
              My studies in Industrial Mechatronics provided me with a deep
              understanding of manufacturing processes, automation, and control
              systems. I also gained experience in technical writing, project
              management, and collaboration with diverse teams.
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-link">Read more</button>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col text-gray-800 md:flex-row md:h-[20rem] w-full items-center justify-center ">
        <div className="flex flex-col gap-8 text-left  md:w-1/2">
          <p className="font-bold text-xl md:text-4xl">
            Mechatronics Engineering
          </p>
          <Progress value={progress} className="w-[80%]" />
          <p className="font-bold  text-xl md:text-4xl">
            Industrial Automation
          </p>
          <Progress value={progress} className="w-[70%]" />
        </div>
        <div className="flex flex-col gap-8  md:w-1/2 ">
          <p className="font-bold  text-xl md:text-4xl">
            Leadership & Team Work
          </p>
          <Progress value={progress} className="w-[87%]" />
          <p className="font-bold  text-xl md:text-4xl">Project Management</p>
          <Progress value={progress} className="w-[60%]" />
        </div>
      </div>
    </section>
  );
}

export default Skill