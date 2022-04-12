import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaSteam,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-scroll"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-50">
      <div>
        <h1 className="text-2xl">kevinkellyyyy</h1>
        {/* <img src={Placeholder} alt="logo" style={{ width: "50px" }} /> */}
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="border-0 hover:border-b-2 hover:border-gray-50">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-0 hover:border-b-2 hover:border-gray-50">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="border-0 hover:border-b-2 hover:border-gray-50">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="border-0 hover:border-b-2 hover:border-gray-50">
          <Link to="project" smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className="border-0 hover:border-b-2 hover:border-gray-50">
          <Link to="resume" smooth={true} duration={500}>
            Work Experience
          </Link>
        </li>
        <li className="border-0 hover:border-b-2 hover:border-gray-50">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl border-0 hover:border-b-2 hover:border-gray-50">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl border-0 hover:border-b-2 hover:border-gray-50">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl border-0 hover:border-b-2 hover:border-gray-50">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl border-0 hover:border-b-2 hover:border-gray-50">
          <Link onClick={handleClick} to="project" smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className="py-6 text-4xl border-0 hover:border-b-2 hover:border-gray-50">
          <Link onClick={handleClick} to="resume" smooth={true} duration={500}>
            Work Experience
          </Link>
        </li>
        <li className="py-6 text-4xl border-0 hover:border-b-2 hover:border-gray-50">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[168px] h-[60px] flex justify-beetween items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#0e76a8]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/kevin-isyanta-b5962117b/" target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[168px] h-[60px] flex justify-beetween items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#171515]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/kevinkellyyyy" target="_blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[168px] h-[60px] flex justify-beetween items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#25d366]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://wa.me/6282297017693" target="_blank"
            >
              WhatsApp <FaWhatsapp size={30} />
            </a>
          </li>
          <li className="w-[168px] h-[60px] flex justify-beetween items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#ea4355]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:kellyisyanta@gmail.com" target="_blank"
            >
              Email <MdAlternateEmail size={30} />
            </a>
          </li>
          <li className="w-[168px] h-[60px] flex justify-beetween items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#8134af]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.instagram.com/kevinkellyyyy" target="_blank"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[168px] h-[60px] flex justify-beetween items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#122832]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://steamcommunity.com/id/zhypr" target="_blank"
            >
              Steam <FaSteam size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
