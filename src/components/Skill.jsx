import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import angular from "../assets/angular.png";
import react from "../assets/react.png";
import bootstrap from "../assets/boostrap.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";

const Skill = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div data-aos="fade-right">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div
            data-aos="zoom-in" data-aos-delay="100"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={html} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div
            data-aos="zoom-in" data-aos-delay="200"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={css} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div
            data-aos="zoom-in" data-aos-delay="300"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={javascript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div
            data-aos="zoom-in" data-aos-delay="400"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={angular} alt="HTML icon" />
            <p className="my-4">ANGULAR (JS & Ionic)</p>
          </div>
          <div
            data-aos="zoom-in" data-aos-delay="500"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={react} alt="HTML icon" />
            <p className="my-4">REACT (JS & Native)</p>
          </div>
          <div
            data-aos="zoom-in" data-aos-delay="600"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={bootstrap} alt="HTML icon" />
            <p className="my-4">BOOSTRAP</p>
          </div>
          <div
            data-aos="zoom-in" data-aos-delay="700"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div
            data-aos="zoom-in" data-aos-delay="800"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={python} alt="HTML icon" />
            <p className="my-4">PYTHON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
