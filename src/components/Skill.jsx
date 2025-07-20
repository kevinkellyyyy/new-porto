import React from "react";
import html from "../assets/html.png";
import sass from "../assets/sass.png";
import typescript from "../assets/typescript.svg";
import angular from "../assets/angular.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import ant from "../assets/antdesign.png";
import next from "../assets/nextjs.png";
import vue from "../assets/vue.png";
import redux from "../assets/redux.svg";
import vite from "../assets/vite.svg";
import jest from "../assets/jest.png";
import git from "../assets/git.svg";
import lighthouse from "../assets/lighthouse.svg";
import flagsmith from "../assets/flagsmith.png";
import firebase from "../assets/firebase.svg";

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
            data-aos="zoom-in"
            data-aos-delay="100"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={html} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto mt-3" src={sass} alt="HTML icon" />
            <p className="mt-5">SASS</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={typescript} alt="HTML icon" />
            <p className="my-4">TYPESCRIPT</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={react} alt="HTML icon" />
            <p className="my-4">REACT JS</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={ant} alt="HTML icon" />
            <p className="my-4">ANT DESIGN</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={redux} alt="HTML icon" />
            <p className="my-4">REDUX TOOLKIT</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={vite} alt="HTML icon" />
            <p className="my-4">VITE</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={jest} alt="HTML icon" />
            <p className="my-4">JEST</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto mt-4" src={git} alt="HTML icon" />
            <p className="mt-6">GIT</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={firebase} alt="HTML icon" />
            <p className="my-4">FIREBASE</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img
              className="w-20 mx-auto mt-4"
              src={flagsmith}
              alt="HTML icon"
            />
            <p className="mt-6">FLAGSMITH</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img
              className="w-20 mx-auto mt-4"
              src={lighthouse}
              alt="HTML icon"
            />
            <p className="mt-6">LIGHTHOUSE</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={next} alt="HTML icon" />
            <p className="my-4">NEXT JS</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={vue} alt="HTML icon" />
            <p className="my-4">VUE JS</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="700"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
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
