import React, { useState } from 'react';
import { Jumbotron, Button, Collapse, Card, CardBody } from 'reactstrap';
import SplitText from 'react-pose-text';
import QueueAnim from 'rc-queue-anim';
import '../Css/Home.css';

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
    <div>
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
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <div>
              <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>More</Button>
              <Collapse isOpen={isOpen}>
                <Card>
                  <CardBody>
                    Anim pariatur cliche reprehenderit,
                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident.
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