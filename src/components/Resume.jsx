import React from "react";
import { useResumeData } from "../hooks/useResumeData";

const WorkExperienceItem = ({ experience, animationDelays }) => {
  const {
    period,
    position,
    company,
    description,
    formattedAchievements,
    formattedAdditionalProjects
  } = experience;

  return (
    <div className="flex flex-col sm:flex-row gap-6 mt-8 text-justify">
      <div 
        className="w-2/2 sm:w-1/3 flex flex-col gap-6 text-right text-lg" 
        data-aos="fade-right" 
        data-aos-delay={animationDelays.PERIOD}
      >
        {period}
      </div>
      <div className="flex flex-col w-2/2 sm:w-2/3">
        <div data-aos="fade-left" data-aos-delay={animationDelays.POSITION}>
          <p className="text-2xl font-bold">{position}</p>
          <p className="text-xl mt-2">{company}</p>
        </div>
        <ul>
          <li className="px-0 pt-2">
            {description && (
              <div data-aos="fade-left" data-aos-delay={animationDelays.DESCRIPTION}>
                {description}
              </div>
            )}
            <ul className="list-disc">
              {formattedAchievements.map((achievement, index) => (
                <li 
                  key={index}
                  className="ml-5 pt-2 pr-0" 
                  data-aos="fade-left" 
                  data-aos-delay={achievement.delay}
                >
                  {achievement.text}
                </li>
              ))}
            </ul>
          </li>
          {formattedAdditionalProjects.map((project, projectIndex) => (
            <li key={projectIndex} className="px-0 pt-2">
              <div data-aos="fade-left" data-aos-delay={400}>
                {project.description}
              </div>
              <ul className="list-disc">
                {project.formattedAchievements.map((achievement, index) => (
                  <li 
                    key={index}
                    className="ml-5 pt-2 pr-0" 
                    data-aos="fade-left" 
                    data-aos-delay={achievement.delay}
                  >
                    {achievement.text}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Resume = () => {
  const { workExperiences, animationDelays } = useResumeData();

  return (
    <div name="resume" className="w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 my-5">
          <div className="text-center" data-aos="fade-left">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Work Experience
            </p>
          </div>
          {workExperiences.map((experience) => (
            <WorkExperienceItem 
              key={experience.id}
              experience={experience}
              animationDelays={animationDelays}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
