import { useState } from "react";
import { send } from "emailjs-com";
import { CONTACTS } from "../utils/constants";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Kevin",
    message: "",
    reply_to: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState({
    show: false,
    message: "",
  });

  const onSubmit = (e) => {
    // belum ditambahin toast sedang mengirim dan sukses
    setIsLoading(true);
    e.preventDefault();
    // --- METHOD TO SEND THE MAIL ---
    send("service_fdmwqx2", "template_q5a6mn9", toSend, "jmAvO4luUhCDaEkrD")
      .then((response) => {
        setIsLoading(false);
        setToSend({ from_name: "", reply_to: "", message: "" });
        setShowMessage({ show: true, message: "Email sent successfully!" });
        setTimeout(() => {
          setShowMessage({ show: false, message: "" });
        }, 3000);
      })
      .catch((err) => {
        setIsLoading(false);
        setShowMessage({ show: true, message: "Email failed to send." });
        setTimeout(() => {
          setShowMessage({ show: false, message: "" });
        }, 3000);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        onSubmit={onSubmit}
        className="flex flex-col max-w-[600px] w-full"
        data-aos="fade-right"
      >
        <div className="pb-8">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center py-8">
            {CONTACTS.map(({ id, url, icon, content }) => (
              <div key={id}>
                <a
                  className="flex items-center w-full text-gray-300"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-[30px]">{icon}</div>
                  &nbsp;
                  {content}
                </a>
              </div>
            ))}
          </div>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email - kellyisyanta@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          name="from_name"
          placeholder="Name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          name="reply_to"
          placeholder="Your email"
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
        {isLoading ? (
          <button
            type="submit"
            className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center disabled:opacity-60 disabled:cursor-not-allowed"
            disabled
            style={{ cursor: "not-allowed", opacity: 0.6 }}
          >
            Sending...
          </button>
        ) : (
          <button
            type="submit"
            className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
          >
            Let's Collaborate
          </button>
        )}
        {showMessage.show && (
          <p className="text-green-500 text-center">{showMessage.message}</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
