import { PROJECTS } from "../utils/constants";

const Project = () => {
  return (
    <div
      name="project"
      className="w-full min-h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full pb-10">
        <div className="pb-8" data-aos="fade-right">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Project
          </p>
          <p className="py-6">Check out some of my Project</p>
        </div>

        {/* Container */}
        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
          data-aos="zoom-in"
        >
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              style={{ backgroundImage: `url(${project.image})` }}
              data-aos="zoom-in"
              data-aos-delay="0"
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div"
            >
              <div className="absolute flex bottom-2 left-2 opacity-1 text-center group-hover:opacity-0 w-full">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] text-white mr-1 p-1 bg-gray-800 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="opacity-0 text-center group-hover:opacity-100 w-full">
                <span className="text-xl font-bold text-white">
                  {project.name}
                </span>
                <div className="text-center">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md">
                        Demo
                      </button>
                    </a>
                  )}
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md">
                        Detail
                      </button>
                    </a>
                  )}
                </div>
                <span className="text-xs text-white">
                  {project.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
