import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Skill from "./components/Skill";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Testimonials from "./components/Testimonials";

function App() {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  useEffect(() => {
    let samt = 0;

    const handleScroll = () => {
      if (samt <= 10) {
        samt++;
      } else {
        Aos.refresh();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Add dependency array to run only once

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Resume />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
