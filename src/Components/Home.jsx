import React from "react";
// import { navLinks } from "../utils/CommonData";
import MyImg from "../Images/My-Img.jpeg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
// import Header from "../Includes/Header";

const Home = () => {
  return (
    <>
      <div className=" bg-black h-screen pt-12 md:pb-5 px-6 lg:p-0 text-white  items-center flex xl:flex-row lg:gap-5  xl:gap-14 ">
        {/* left side image */}
        <div className="w-[80%] xl:w-[45%]  2xl:w-[35%] relative hidden lg:flex aspect-square  bg-orange-500  overflow-hidden">
          <img
            src={MyImg}
            alt="Roopa"
            className="w-full h-full rounded-md object-cover bottom-7 left-10 top-10 absolute"
          />
        </div>
        {/* right side conetnt*/}

        <div className="w-full xl:w-[50%] flex flex-col gap-4 md:gap-6 2xl:gap-8 md:justify-center items-start   xl:py-10 xl:pe-24 2xl:pe-10 ">
          <h1 className="text-[26px] sm:text-[30px] md:text-[36px] 2xl:text-5xl font-bold 2xl:flex 2xl:flex-col 2xl:gap-2 uppercase">
            <span className="flex items-center gap-2 xl:gap-3 text-orange-500">
              <hr className="w-7 hidden xl:flex border-t-4 border-orange-500" />
              I'm Roopa Molaka.
            </span>
            <span className="text-white xl:ps-10">ReactJS Developer</span>
          </h1>

          <p className=" leading-relaxed text-base xl:text-md  2xl:text-lg">
            Front-end developer based in Hyderabad, specializing in responsive
            web design and React.js development. Passionate about building
            clean, user-friendly interfaces and delivering high-quality digital
            experiences.
          </p>
          <div className="mt-3 xl:mt-6">
            <Link
              to="/about-me"
              className="flex items-center border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all rounded-full overflow-hidden shadow-md"
            >
              <span className="px-5  md:text-lg font-semibold">
                MORE ABOUT ME{" "}
              </span>
              <span className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full">
                <FaArrowRight className="md:text-2xl" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
