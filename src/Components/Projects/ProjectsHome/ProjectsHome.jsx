import React from 'react';
import { fadeInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './ProjectsHome.css';

const styles = {
  fadeInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  }
}

const ProjectsHome = () => {
  return (
    <div>
      <StyleRoot>
        <div className='Background_Home_Project' style={styles.fadeInDown}>
          <h1 className='Home_Project_Title'>Welcome to my Project</h1>
          <div>
            <p className='Intro_Project'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto labore aliquam placeat distinctio quidem ex eos qui dolorum, quos in voluptatibus officia voluptate rem excepturi quis! Quae tempore in possimus.</p>
          </div>
        </div>
      </StyleRoot>
    </div>

  );
}

export default ProjectsHome;