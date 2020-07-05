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
        <h1 className='Home_Project_Title'>Project Home</h1>
        <div className='Ctn_Intro_Project'>
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses} className='Intro_Project'>
            Welcome to my projet page. Here, you can find my different projet as Web, Game and my creation illustration or cover, logo, ect...
          </SplitText>
        </div>
        <div className='Line_animation'>
        </div>
        <Animated animationIn="fadeInDown" animationOut="fadeOutUp" animationInDelay="7000" animationOutDelay="1000" isVisible={true}>
          <div class="container">
            <span class="react-logo">
              <span class="nucleo"></span>
            </span>
          </div>
        </Animated>
      </div>
    </Animated>
  );
}

export default ProjectsHome;