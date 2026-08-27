import React, { useCallback, useContext, useState } from "react";
import { ContactInfo, InputFields } from "../utils/CommonData";
import { IoIosSend } from "react-icons/io";
import { FormContext } from "../App";
import axios from "axios";
import useValidation from "../utils/Validation";
const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const { validate } = useValidation();
  const { formData, setFormData, errors, setErrors } = useContext(FormContext);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const ValidationErrors = validate();
      if (Object.keys(ValidationErrors).length > 0) {
        setErrors(ValidationErrors);
      }

      try {
        const res = await axios.post(
          "https://portfolio-backend-fv5w.onrender.com/api/contactForm",
          formData
        );
        if (res.status === 201) {
          setFormData({
            fName: "",
            lName: "",
            email: "",
            phone: "",
            message: "",
          });
          setStatusMessage("Your enquiry has been submitted successfully ✅");
        }
      } catch (err) {
        console.log(err);
        setStatusMessage("Something went wrong.Please try again.");
      }
    },
    [formData, setErrors, setFormData, validate]
  );

  return (
    <div className="text-white flex flex-col gap-10 lg:gap-16 px-5 lg:px-10 pb-10 pt-16 lg:py-20">
      <div className="flex justify-center gap-3 flex-col items-center">
        <p className="text-gray-400">Feel free to contact me anytime</p>
        <h1 className="text-orange-500 text-2xl lg:text-4xl 2xl:text-5xl  font-bold">
          Get in Touch
        </h1>
        <hr className="border-orange-500 border border-t-2 lg:border-t-4 w-32 lg:w-40 rounded-md" />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 ">
        {/* ***************************** Message Me ******************************/}
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/2   gap-3 flex-col flex justify-center items-start"
        >
          <h2 className="text-xl lg:text-2xl font-bold text-orange-500 mb-3">
            Message Me
          </h2>
          <div className="grid grid-cols-2 gap-3 w-full">
            {InputFields.map((input, i) => {
              return (
                <div key={i} className="flex flex-col">
                  {" "}
                  <input
                    className="rounded-md bg-gray-900  px-4 py-2"
                    name={input.name}
                    type={input.type}
                    onChange={handleChange}
                    value={formData[input.name] || ""}
                    placeholder={input.label}
                  />
                  <p className="text-red-500 space-y-2">{errors[input.name]}</p>
                </div>
              );
            })}
          </div>
          <div className="w-full">
            <textarea
              type="text"
              rows={5}
              onChange={handleChange}
              value={formData.message}
              name="message"
              placeholder="Type your message here..."
              className="rounded-md p-4 w-full bg-gray-900 "
            ></textarea>
            <p className="text-red-500 space-y-2">{errors.message}</p>
          </div>
          <div>
            <button className=" mt-3 hover:bg-orange-500 border text-white bg-gray-900 font-bold border-orange-500 rounded-full flex flex-row  ">
              <span className="lg:px-4 px-3 py-2 lg:py-3 "> Send Message</span>
              <span className=" bg-orange-500 rounded-full p-3 ">
                <IoIosSend className="text-xl lg:text-2xl   " />
              </span>
            </button>
            <p className="text-center p-2 ">{statusMessage}</p>
          </div>
        </form>

        {/* ***************************** Contact Info ***************************** */}
        <div className="lg:w-1/2 flex flex-col gap-7">
          <div className="w-[80%] flex-col flex gap-3">
            <h2 className=" text-xl lg:text-2xl font-bold text-orange-500">
              Contact Info
            </h2>
            <p className="text-gray-400">
              Always available for freelance work if the right project comes
              along, Feel free to contact me!
            </p>
          </div>
          <div>
            {ContactInfo.map((contact, i) => {
              const Icon = contact.icon;
              return (
                <div key={i} className="flex flex-row  gap-4 items-center">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <Icon className="lg:text-xl" />
                  </div>
                  <div className="border-gray-500 border-s px-3 py-2">
                    <h5 className="font-semibold lg:font-bold">
                      {contact.name}
                    </h5>
                    <p className="text-gray-400"> {contact.info}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
