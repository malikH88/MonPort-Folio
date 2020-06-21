import React, { useState } from 'react';
import { Jumbotron, Button, Collapse, Card, CardBody } from 'reactstrap';
import SplitText from 'react-pose-text';
import QueueAnim from 'rc-queue-anim';
import '../Css/Home.css';
import Wild_Picture from '../Files/image/WildCodeSchool.png';

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
    delay: ({ charIndex }) => charIndex * 10
  }
};

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className='Background_Home'>
      <div className='title'>
        <SplitText wordPoses={wordPoses} charPoses={charPoses2}>
          BIENVENUE
        </SplitText>
      </div>
      <Jumbotron>
        <QueueAnim>
          <div class="container">
            <span class="react-logo">
              <span class="nucleo"></span>
            </span>
          </div>
          <div key="2" className="Text_Animation">
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses} >
              Je m'appelle
              Malik Himeur
              je suis devellopeur react
              full stack
              passionnée et sensible à l'UX Design.
          </SplitText>
          </div>
          <div key="3">
            <hr className="my-2" />
            <p>Je suis actuellement en formation a la wild Code School de Reims pour plus d'information cliqué ci-dessous.</p>
            <div>
              <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>More</Button>
              <Collapse isOpen={isOpen}>
                <Card>
                  <CardBody>
                    <div>
                      <h1>Wild Code School</h1>
                      <img src={Wild_Picture} alt=""/>
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