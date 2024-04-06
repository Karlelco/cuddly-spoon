'use client';
import React from "react";
import { BellIcon, CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BiCheckCircle } from "react-icons/bi";
import { motion } from "framer-motion";

function Project() {
  return (
    <section className="text-center bg-sky-200 text-gray-800 ">
      <div className="md:p-10 md:px-24 md:mx-20">
        <p className="text-3xl md:text-6xl   ">
          Expert Mechatronics Engineering Services
        </p>
        <p>
          As a Mechatronics Engineer, I provide expertise in mechanical,
          electrical, and computer engineering to create innovative solutions
          for businesses and communities. With strong leadership and
          communication skills, I can provide project management, technical
          support, and automation and installation services to ensure seamless
          and efficient operation of systems
        </p>
      </div>
      <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-12">
        <Card className="h-[400px] bg-blue-600 text-white">
          <CardHeader>
            <CardTitle>
              <BiCheckCircle className="size-12" />
            </CardTitle>
            <CardDescription className="text-bold text-2xl md:text-4xl text-left">
              Mechatronics Engineering
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 text-left">
            As a Mechatronics Engineer, I integrate mechanical, electrical, and
            computer engineering to design, control, and operate complex
            systems. I have expertise in control systems, robotics, and
            automation, among other areas.
          </CardContent>
          <CardFooter>
            <Button variant="link" className="w-full justify-start">
              <CheckIcon className="mr-2 h-4 w-4" /> Read more
            </Button>
          </CardFooter>
        </Card>
        <Card className="h-[400px] ">
          <CardHeader>
            <CardTitle>
              <BiCheckCircle className="size-12" />
            </CardTitle>
            <CardDescription className="text-bold text-2xl md:text-4xl text-left">
              Industrial Automation
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 text-left">
            I specialize in industrial automation, providing custom solutions
            that improve efficiency, quality, and safety in manufacturing
            processes. I have experience in PLC programming, HMI design, and
            SCADA systems.
          </CardContent>
          <CardFooter>
            <Button variant="link" className="w-full justify-start">
              <CheckIcon className="mr-2 h-4 w-4" /> Read more
            </Button>
          </CardFooter>
        </Card>
        <Card className="h-[400px]">
          <CardHeader>
            <CardTitle>
              <BiCheckCircle className="size-12" />
            </CardTitle>
            <CardDescription className="text-bold text-2xl md:text-4xl text-left">
              Leadership & Communication
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 text-left">
            As a leader and effective communicator, I can collaborate with
            diverse teams, understand client needs, and provide technical
            support to ensure successful project outcomes.
          </CardContent>
          <CardFooter>
            <Button variant="link" className="w-full justify-start">
              <CheckIcon className="mr-2 h-4 w-4" /> Read more
            </Button>
          </CardFooter>
        </Card>
        <Card className="h-[400px] ">
          <CardHeader>
            <CardTitle>
              <BiCheckCircle className="size-12" />
            </CardTitle>
            <CardDescription className="text-bold text-2xl md:text-4xl text-left">
              Project Management
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 text-left">
            With strong project management skills, I can provide end-to-end
            project management, from requirements gathering to implementation,
            to ensure seamless and efficient operation of systems.
          </CardContent>
          <CardFooter>
            <Button variant="link" className="w-full justify-start">
              <CheckIcon className="mr-2 h-4 w-4" /> Read more
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </section>
  );
}

export default Project;
