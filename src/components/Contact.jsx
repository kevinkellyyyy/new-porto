import React, { useState } from "react";
import { send } from "emailjs-com";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaSteam,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Kevin',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    // belum ditambahin toast sedang mengirim dan sukses
    e.preventDefault();
    // --- METHOD TO SEND THE MAIL ---
    send("service_fdmwqx2", "template_q5a6mn9", toSend, "jmAvO4luUhCDaEkrD")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form onSubmit={onSubmit} className="flex flex-col max-w-[600px] w-full" data-aos="fade-right">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-center py-8'>
            <div>
              <a
                className="flex items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/kevin-isyanta-b5962117b/" target="_blank" rel="noopener noreferrer"
              >
                <FaLinkedin size={30} /> &nbsp;Kevin Isyanta
              </a>
            </div>
            <div>
              <a
                className="flex items-center w-full text-gray-300"
                href="https://github.com/kevinkellyyyy" target="_blank" rel="noopener noreferrer"
              >
                <FaGithub size={30} /> &nbsp;kevinkellyyyy
              </a>
            </div>
            <div>
              <a
                className="flex items-center w-full text-gray-300"
                href="https://wa.me/6282297017693" target="_blank" rel="noopener noreferrer"
              >
                <FaWhatsapp size={30} /> &nbsp;082297017693
              </a>
            </div>
            <div>
              <a
                className="flex items-center w-full text-gray-300"
                href="mailto:kellyisyanta@gmail.com" target="_blank" rel="noopener noreferrer"
              >
                <MdAlternateEmail size={30} /> &nbsp;kellyisyanta@gmail.com
              </a>
            </div>
            <div>
              <a
                className="flex items-center w-full text-gray-300"
                href="https://www.instagram.com/kevinkellyyyy" target="_blank" rel="noopener noreferrer"
              >
                <FaInstagram size={30} /> &nbsp;@kevinkellyyyy
              </a>
            </div>
            <div>
              <a
                className="flex items-center w-full text-gray-300"
                href="https://steamcommunity.com/id/zhypr" target="_blank" rel="noopener noreferrer"
              >
                <FaSteam size={30} /> &nbsp;zhypr
              </a>
            </div>
          </div>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email - kellyisyanta@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type='text'
          name='from_name'
          placeholder='Name'
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type='text'
          name='reply_to'
          placeholder='Your email'
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          value={toSend.message}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
