import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Skill from "./components/Skill";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
