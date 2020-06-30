import React from 'react';
import { Animated } from "react-animated-css";
import SplitText from 'react-pose-text';
import './ProjectsHome.css';

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 50,
  },
};

const ProjectsHome = () => {
  return (
    <Animated animationIn="fadeInDown" animationInDuration="1300" isVisible={true}>
      <div className='Background_Home_Project' >
        <h1 className='Home_Project_Title'>Welcome to my Project</h1>
        <div className='Ctn_Intro_Project'>
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses} className='Intro_Project'>
            Je m'appelle Malik Himeur je suis devellopeur react full stack passionnée et sensible à l'UX Design.
            </SplitText>
        </div>
        <div className='Line_animation'>
        </div>
        <div>
          <Animated animationIn="fadeInDown" animationOut="fadeOutUp" animationInDelay="6000" animationOutDelay="1000" isVisible={true}><h1>Malik</h1></Animated>
        </div>
      </div>
    </Animated>
  );
}

export default ProjectsHome;