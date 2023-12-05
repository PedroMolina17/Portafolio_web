"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <section className="lg:py-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start "
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-bl from-[#544a7d]  to-[#ffd452]">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Pedro",
                1000,
                "Web Developer",
                1000,
                "Systems Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base lg:text-xl sm:text-lg mb-6">
            Hello! I'm a graduate in Computer Engineering and Systems. My
            portfolio showcases standout projects that demonstrate my ability to
            create effective technological solutions. With practical experience
            in software development and system design.
          </p>
          <div>
            <button
              href={"/"}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#ffd452]  to-[#544a7d]  hover:from-[#ffd452] text-white"
            >
              Hire me
            </button>
            <button
              href={"/"}
              className="px-1 py-1 w-full sm:w-fit rounded-full  bg-gradient-to-br from-[#ffd452] to-[#544a7d]  hover:bg-slate-800   mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {" "}
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className=" rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[450px] lg:h-[450px]      relative">
            <Image
              src="/images/Avatar.png"
              alt="Pedro Molina Noa"
              //* Aprender el transform
              className="absolute transform lg:w-[350px] lg:h-[350px] w-[250px] h-[250px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              priority={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
