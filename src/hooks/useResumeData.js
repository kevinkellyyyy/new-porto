import { useMemo } from 'react';
import { ANIMATION_DELAYS, WORK_EXPERIENCES } from '../utils/constants';

export const useResumeData = () => {
  const workExperiences = useMemo(() => WORK_EXPERIENCES, []);

  const getAnimationDelay = (baseDelay, index = 0) => {
    return baseDelay + (index * ANIMATION_DELAYS.ACHIEVEMENT_INCREMENT);
  };

  const formatWorkExperience = (experience) => {
    return {
      ...experience,
      formattedAchievements: experience.achievements?.map((achievement, index) => ({
        text: achievement,
        delay: getAnimationDelay(ANIMATION_DELAYS.ACHIEVEMENT_BASE, index)
      })) || [],
      formattedAdditionalProjects: experience.additionalProjects?.map(project => ({
        ...project,
        formattedAchievements: project.achievements?.map((achievement, index) => ({
          text: achievement,
          delay: getAnimationDelay(ANIMATION_DELAYS.ACHIEVEMENT_BASE + 250, index)
        })) || []
      })) || []
    };
  };

  return {
    workExperiences: workExperiences.map(formatWorkExperience),
    animationDelays: ANIMATION_DELAYS
  };
};
