import React, { useState } from 'react';
import { Jumbotron, Button, Collapse, Card, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faCss3Alt, faHtml5, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import SplitText from 'react-pose-text';
import QueueAnim from 'rc-queue-anim';


import './Home.css';

import Wild_Picture from '../../Files/image/WildCodeSchool.png';
import Avatar from '../../Files/image/avataaars.svg'

const wordPoses = {
  draggable: true
};

const charPoses2 = {
  drag: {
    y: 0,
    transition: ({ charInWordIndex }) => ({
      type: 'spring',
      velocity: 100 * Math.sin(1 + charInWordIndex),
      damping: 0
    })
  },
  dragEnd: {
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 1000
    }
  }
};

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 25
  }
};

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className='Background_Home'>
      <div key="1" className='title'>
        <SplitText wordPoses={wordPoses} charPoses={charPoses2}>
          WELCOME
        </SplitText>
      </div>
      <Jumbotron>
        <QueueAnim interval={500} duration={2000}>
        <div key="1" className='Ctn_Avatar'>
          <img className="Avatar" src={Avatar} alt="Avatar" />
        </div>
        <div key="2" className="Text_Animation">
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses} >
            Hi, my name is
            Malik Himeur
            I am a react developer
            full stack
            passionate and sensitive to UX Design.
          </SplitText>
        </div>
        <hr className="my-2" />
        <div className="Logo_Container">
          <FontAwesomeIcon icon={faCss3Alt} className='Css' />
          <FontAwesomeIcon icon={faHtml5} className='Html' />
          <FontAwesomeIcon icon={faReact} className='React' />
          <FontAwesomeIcon icon={faNodeJs} className='NodeJs' />
        </div>
        <div key="3">
          <hr className="my-2" />
          <div className="Explain_Present">
            <p>I am currently in training at the wild Code School of Reims for more information clicked below.</p>
          </div>
          <div>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>See more</Button>
            <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                  <div className='Container_More'>
                    <h1 className='More_Title'>Wild Code School</h1>
                    <img className='More_Img' src={Wild_Picture} alt="" />
                    <p className='More_Text'>La <strong>Wild Code School</strong> est une école innovante et un réseau européen de campus qui forment aux métiers tech des spécialistes adaptables. C'est une marque de la société <strong>Innov'Educ</strong>. Après s'être historiquement développée sur le métier de développeur web <strong>(PHP, Javascript,Java/Android)</strong>, l'école propose aujourd'hui des formations autour de six grands domaines: le développement informatique, la data, la cybersécurité, le product management, l'<strong>UX/UI</strong> Design et le business développement 2.0. Elle forme essentiellement des adultes en reconversion professionnelle sur des formats courts de trois à cinq mois.</p>
                  </div>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </div>
        </QueueAnim>
      </Jumbotron>
    </div>
  )
}

export default Home;