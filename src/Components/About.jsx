import React from "react";
import MyImg from "../Images/RoopaImg.jpeg";
import { FaArrowDown } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiVercel } from "react-icons/si";
import { Link } from "react-router";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-white">
      {" "}
      {/* ******************* Section Header ******************* */}
      <div className="flex justify-center gap-3 flex-col items-center xl:mb-12">
        <p className="text-gray-400  xl:text-lg">Get to know me</p>
        <h1 className="text-orange-500 text-3xl 2xl:text-5xl font-bold">
          About Me
        </h1>
        <hr className="border-orange-500 xl:border-t-4 border-t-2 w-32 rounded-md" />
      </div>
      {/* ******************* About Content ******************* */}
      <div className="flex flex-col xl:flex-row items-center py-10 px-3 2xl:ps-5 2xl:pe-28 gap-12">
        {/* ******************* Image ********************/}
        <div className="w-64 h-64 lg:w-[70%] lg:h-96 xl:w-[40%]  2xl:w-[38%] 2xl:h-full overflow-hidden rounded-lg shadow-lg">
          <img
            src={MyImg}
            alt="Roopa"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* ******************* Text Content ******************* */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <h3 className="text-orange-500  text-base lg:text-lg xl:text-2xl font-bold">
              Who am I?
            </h3>
            <h2 className="text-lg lg:text-2xl xl:text-3xl font-bold leading-snug">
              I'm Roopa Molaka, a React.js and Web Developer
            </h2>
            <p className="text-gray-300 leading-relaxed text-justify">
              I’m Roopa Molaka, a passionate React.js and Web Developer crafting
              seamless, high-performing, and visually appealing web
              applications. With a strong focus on clean code, modern design
              principles, and user-centric solutions, I bring ideas to life with
              scalable and efficient digital experiences. My expertise in
              React.js, along with a keen eye for detail, allows me to build
              responsive, dynamic, and future-ready websites that deliver real
              value.
            </p>
            <hr className="border-gray-700" />
          </div>

          {/* ******************* Info Grid ********************/}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
            <p>
              <span className="font-semibold text-white">Name:</span> Roopa
              Molaka
            </p>
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              roopamolaka@gmail.com
            </p>
            <p>
              <span className="font-semibold text-white">Age:</span> 23
            </p>
            <p>
              <span className="font-semibold text-white">From:</span>{" "}
              Madhuranagar, Hyderabad{" "}
            </p>
          </div>

          {/* ******************* Button ******************* */}
          <div className="w-[182px] mt-6 lg:w-full flex flex-col-reverse lg:flex-row gap-4 lg:gap-6 lg:items-center justify-start 2xl:space-x-6">
            {/* ******************* Download CV Button ********************/}
            <a
              href="./Assets/RoopaMolaka-Frontend-Developer.pdf"
              download
              className="flex items-center border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all rounded-full overflow-hidden shadow-md"
            >
              <span className="px-5 2xl:py-3 2xl:text-lg   font-semibold">
                Download CV
              </span>
              <span className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full">
                <FaArrowDown className="2xl:text-2xl text-lg" />
              </span>
            </a>

            <hr className="border-gray-500 border-t-1 w-20 rounded-md hidden lg:flex" />
            {/******************** Social Links in a Row ******************* */}
            <div className="flex items-center space-x-5 text-2xl text-gray-400">
              <Link
                to="https://github.com/RoopaMolaka"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-white transition-colors duration-300" />
              </Link>

              <Link
                to="https://vercel.com/roopamolakas-projects"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiVercel className="hover:text-white transition-colors duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
