import React, { useState } from "react";
// import ContactForm from "./ContactForm";
import { MyWorks } from "../utils/CommonData";
import { Modal } from "antd";
import { Link } from "react-router";
const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { title, img, Techstack, description, link } = selectedProject || {};
  // console.log(selectedProject)
  const handleOpen = (project) => {
    setIsOpen(true);
    setSelectedProject(project);
  };
  const handleCancel = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };
  return (
    <section className=" xl:pe-20 pt-14 xl:py-10">
      <div className="flex justify-center gap-3 flex-col items-center">
        <p className="text-gray-400">Showcasing some of my best work</p>
        <h1 className="text-orange-500 text-2xl lg:text-4xl 2xl:text-5xl  font-bold">
          Portfolio
        </h1>
        <hr className="border-orange-500 border border-t-2 lg:border-t-4 w-32 lg:w-40 rounded-md" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 xl:gap-6 p-4 xl:ps-10 xl:py-16 xl:pe-16">
        {MyWorks.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900  rounded-xl shadow-md hover:shadow-xl transition duration-300 "
            onClick={() => {
              handleOpen(project);
            }}
          >
            <img
              src={project.img}
              alt={`${project.title}Img`}
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
      <Modal
        title={null}
        centered
        footer={null}
        open={isOpen}
        onCancel={handleCancel}
        width="90%" // let content + Tailwind handle responsiveness
        className="max-w-[95%] xs:max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[50%] 3xl:max-w-[45%]"
      >
        {/* Grid content */}
        <div
          className="
      grid grid-cols-1 sm:grid-cols-2 gap-4 
      text-gray-800
    "
        >
          {/* Project */}
          <p className="text-sm sm:text-base md:text-lg">
            <span className="font-semibold">Project: </span>
            <span className="text-gray-600">{title}</span>
          </p>

          {/* Preview */}
          <p className="text-sm sm:text-base md:text-lg">
            <span className="font-semibold">Preview: </span>
            <Link
              to={link}
              target="_blank"
              className="text-blue-500 hover:underline break-all"
            >
              {link}
            </Link>
          </p>

          {/* Techstack */}
          <p className="text-sm sm:text-base md:text-lg">
            <span className="font-semibold">Techstack: </span>
            <span className="text-gray-600">{Techstack}</span>
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg leading-relaxed col-span-1 sm:col-span-2">
            <span className="font-semibold">Description: </span>
            <span className="text-gray-600">{description}</span>
          </p>
        </div>

        {/* Image */}
        <div className="w-full mt-4">
          <img
            src={img}
            alt={`${title}Img`}
            className="
        rounded-xl w-full object-cover
        max-h-[200px] xs:max-h-[250px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[400px]
      "
          />
        </div>
      </Modal>
    </section>
  );
};

export default Portfolio;
