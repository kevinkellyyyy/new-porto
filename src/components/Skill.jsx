import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import angular from "../assets/angular.png";
import react from "../assets/react.png";
import bootstrap from "../assets/boostrap.png";
import tailwind from "../assets/tailwind.png";
import ant from "../assets/antdesign.png";
import laravel from "../assets/laravel.png";
import next from "../assets/nextjs.png";
import vue from "../assets/vue.png";
import reduxsaga from "../assets/reduxSaga.png";

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
            data-aos="zoom-in" data-aos-delay="500"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={react} alt="HTML icon" />
            <p className="my-4">REACT JS</p>
          </div>
          <div
            data-aos="zoom-in" data-aos-delay="500"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={reduxsaga} alt="HTML icon" />
            <p className="my-4">REDUX SAGA</p>
          </div>
          <div
            data-aos="zoom-in" data-aos-delay="400"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={vue} alt="HTML icon" />
            <p className="my-4">VUE JS</p>
          </div>
          <div
            data-aos="zoom-in" data-aos-delay="400"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={next} alt="HTML icon" />
            <p className="my-4">NEXT JS</p>
          </div>
          <div
            data-aos="zoom-in" data-aos-delay="400"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={laravel} alt="HTML icon" />
            <p className="my-4">LARAVEL</p>
          </div>
          <div
            data-aos="zoom-in" data-aos-delay="600"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={bootstrap} alt="HTML icon" />
            <p className="my-4">BOOSTRAP</p>
          </div>
          <div
            data-aos="zoom-in" data-aos-delay="600"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={ant} alt="HTML icon" />
            <p className="my-4">ANT DESIGN</p>
          </div>
          <div
            data-aos="zoom-in" data-aos-delay="700"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div
            data-aos="zoom-in" data-aos-delay="400"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={angular} alt="HTML icon" />
            <p className="my-4">ANGULAR JS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
