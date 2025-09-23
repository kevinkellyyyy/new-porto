import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { CONTACTS } from "../utils/constants";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed z-10 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-50">
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
          <Link to="project" smooth={true} offset={-80} duration={500}>
            Project
          </Link>
        </li>
        <li className="border-0 hover:border-b-2 hover:border-gray-50">
          <Link to="resume" smooth={true} offset={-80} duration={500}>
            Work Experience
          </Link>
        </li>
        <li className="border-0 hover:border-b-2 hover:border-gray-50">
          <Link to="testimonials" smooth={true} offset={-80} duration={500}>
            Recommendations
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
        <li className="py-6 text-2xl md:text-4xl border-0 hover:border-b-2 hover:border-gray-50">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-2xl md:text-4xl border-0 hover:border-b-2 hover:border-gray-50">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-2xl md:text-4xl border-0 hover:border-b-2 hover:border-gray-50">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-2xl md:text-4xl border-0 hover:border-b-2 hover:border-gray-50">
          <Link
            onClick={handleClick}
            to="project"
            smooth={true}
            offset={-80}
            duration={500}
          >
            Project
          </Link>
        </li>
        <li className="py-6 text-2xl md:text-4xl border-0 hover:border-b-2 hover:border-gray-50">
          <Link
            onClick={handleClick}
            to="resume"
            smooth={true}
            offset={-80}
            duration={500}
          >
            Work Experience
          </Link>
        </li>
        <li className="py-6 text-2xl md:text-4xl border-0 hover:border-b-2 hover:border-gray-50">
          <Link
            onClick={handleClick}
            to="testimonials"
            smooth={true}
            offset={-80}
            duration={500}
          >
            Recommendations
          </Link>
        </li>
        <li className="py-6 text-2xl md:text-4xl border-0 hover:border-b-2 hover:border-gray-50">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          {CONTACTS.map(({ id, url, icon, content, bgColor, cColor }) => (
            <li
              key={id}
              className="w-[280px] h-[60px] flex justify-beetween items-center ml-[-220px] hover:ml-[0px] duration-30"
              style={{ backgroundColor: bgColor }}
            >
              <a
                className={`flex justify-between items-center w-full ${cColor}`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-[16px]">{content}</div>
                <div className="text-[26px]">{icon}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
