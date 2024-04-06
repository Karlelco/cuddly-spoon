"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Caveat, Roboto_Mono } from "next/font/google";
import Link from "next/link";
import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-caveat",
});




function Footer() {
  return (
    <section className="min-h-16 space-y-12 mt-10 pb-10 text-black">
      <div className="flex flex-col items-center m-auto px-3 md:px-10  md:max-w-[900px] text-center justify-center space-y-4">
        <p className="text-xl md:text-3xl  font-bold">
          {" "}
          Let's work together to create innovative mechatronics engineering
          solutions that improve efficiency, quality, and safety for businesses
          and communities.
        </p>
        <Button className="rounded-full bg-blue-600 w-fit justify-center">
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
      <div className="flex flex-col md:flex-row justify-between px-3 md:px-14 items-center">
        <h1 className={caveat.className}>
          <span className="text-2xl ">Colins Chege</span>
        </h1>
        <div className="gap-3 space-x-2 *:text-xl ">
          <a href="">Services</a>
          <a href="">Contact</a>
        </div>
        <div className=" flex gap-4  *:p-3 *:rounded-full *:border transition-transform hover:*:bg-blue-600 *:cursor-pointer ">
          <motion.div
            whileHover={{ y: -20 }}
            transition={{ delay: 0.5 }}
            className="items-center justify-center"
          >
            <BiLogoTwitter className="size-6  text-blue-800" />
          </motion.div>
          <motion.div
            whileHover={{ y: -20 }}
            transition={{ delay: 0.5 }}
            className="items-center justify-center"
          >
            <BiLogoFacebookCircle className="size-6  text-blue-800" />
          </motion.div>
          <motion.div
            whileHover={{ y: -20 }}
            transition={{ delay: 0.5 }}
            className="items-center justify-center"
          >
            <BiLogoYoutube className="size-6  text-red-800" />
          </motion.div>
          <motion.div
            whileHover={{ y: -20 }}
            transition={{ delay: 0.5 }}
            className="items-center justify-center"
          >
            <BiLogoInstagram className="size-6  text-black" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
