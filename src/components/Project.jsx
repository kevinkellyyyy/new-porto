import React from "react";
import linistoref from "../assets/linistoref.jpg";
import sentimenanf from "../assets/sentimenanf.jpg";
import kellsmoviezf from "../assets/kellsmoviezf.jpg";
import reactjslocalcrudf from "../assets/reactjslocalcrudf.JPG";
import kellnewsf from "../assets/kellnewsf.jpg";
import kellbookf from "../assets/kellbookf.jpg";
import kellsocmed from "../assets/kellsocmed.JPG";
import potretbudayaf from "../assets/potretbudayaf.jpg";
import freecodecamp from "../assets/freecodecamp.JPG";

const Project = () => {
  return (
    <div
      name="project"
      className="w-full text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Project
          </p>
          <p className="py-6">Check out some of my Project</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${linistoref})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 p-3 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                LiniStore
              </span>
              <div className="text-center">
                <a href="https://linistore.id/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Detail
                  </button>
                </a>
              </div>
              <span className="text-sm font-bold text-white tracking-wider">
                Angular JS based website for small merchant or stall to buy their product's stocks with consignment option
              </span>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${kellsocmed})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 p-3 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Kell's Socmed
              </span>
              <div className="text-center">
                <a href="https://kells-socmed.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kevinkellyyyy/codify-test-frontend" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Detail
                  </button>
                </a>
              </div>
              <span className="text-sm font-bold text-white tracking-wider">
                Angular JS based simple socmed app that display list user and their detail post with dummy.io API
              </span>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${sentimenanf})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 py-3 text-center group-hover:opacity-100">
              <span className="text-md font-bold text-white tracking-wider">
                (Thesis Project) Sentiment analysis in Ecommerce Platform
              </span>
              <div className="text-center">
                <a href="http://www.warse.org/IJATCSE/static/pdf/file/ijatcse171942020.pdf" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Published Paper
                  </button>
                </a>
                <a href="https://drive.google.com/drive/folders/1IX16XzhDV_HpDFSXWKMGeEmz_UT6-pFM?usp=sharing" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Detail
                  </button>
                </a>
              </div>
              <span className="text-sm font-bold text-white tracking-wider">
                Using Multilayer Perceptron (MLP) for ML classification algorithm, and FastText for word embedding
              </span>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${freecodecamp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 p-3 text-center group-hover:opacity-100">
              <span className="text-md font-bold text-white tracking-wider">
                FreeCodeCamp Front End Development Libraries certification project (click one of project below to see demo)
              </span>
              <div className="mt-2">
                <a href="https://codepen.io/kevinkellyyyy/pen/gOoeXzX" target="_blank" className="hoover:underline-offset-2">Random Quote Machine</a><br />
                <a href="https://codepen.io/kevinkellyyyy/pen/dyJeyPy" target="_blank" className="hoover:underline-offset-2">Markdown Previewer</a><br />
                <a href="https://codepen.io/kevinkellyyyy/pen/LYerVNd" target="_blank" className="hoover:underline-offset-2">Drumpad Machine</a><br />
                <a href="https://codepen.io/kevinkellyyyy/pen/VwyxVom" target="_blank" className="hoover:underline-offset-2">JavaScript Calculator</a><br />
                <a href="https://codepen.io/kevinkellyyyy/pen/gOoKpME" target="_blank" className="hoover:underline-offset-2">Interval Timer</a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${potretbudayaf})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 p-3 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Ragam Budaya
              </span>
              <div className="text-center">
                <a href="https://play.google.com/store/apps/details?id=app.hatchoko.ragambudaya" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Detail
                  </button>
                </a>
              </div>
              <span className="text-sm font-bold text-white tracking-wider">
                (College Project) Angular Ionic based app for educational and fun, take and share your pic with included fun frame and take the Indonesian knowledge quiz
              </span>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${kellsmoviezf})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 p-3 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Kell's Moviez
              </span>
              <div className="text-center">
                <a href="https://kellsmovies.surge.sh/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kevinkellyyyy/kellsmoviez" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Detail
                  </button>
                </a>
              </div>
              <span className="text-sm font-bold text-white tracking-wider">
                (College Project) Vanilla JS based project, display list of now playing movies with it's detail page using Movie DB API
              </span>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${reactjslocalcrudf})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 p-3 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Simple React JS contact CRUD
              </span>
              <div className="text-center">
                <a href="https://kevinkellyyyy.github.io/kevinkelly-phi-frontend-test/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kevinkellyyyy/kevinkelly-phi-frontend-test" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Detail
                  </button>
                </a>
              </div>
              <span className="text-sm font-bold text-white tracking-wider">
                React JS based simple constact CRUD project with local state
              </span>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${kellnewsf})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 p-3 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Kell's News
              </span>
              <div className="text-center">
                <a href="https://github.com/kevinkellyyyy/kellsnews" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Detail
                  </button>
                </a>
              </div>
              <span className="text-sm font-bold text-white tracking-wider">
                (College Project) Java android based app using News API
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${kellbookf})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 p-3 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Kell's Books
              </span>
              <div className="text-center">
                <a href="https://github.com/kevinkellyyyy/kellsbooks" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Detail
                  </button>
                </a>
              </div>
              <span className="text-sm font-bold text-white tracking-wider">
                (College Project) Java android based for searching books detail, save to favorite.
              </span>
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default Project;
