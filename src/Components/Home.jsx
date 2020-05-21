import React, { useState } from 'react';
import { Jumbotron, Button, Collapse, Card, CardBody } from 'reactstrap';
import SplitText from 'react-pose-text';
import '../Css/Home.css';

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
      <Jumbotron>
        <h1 className="title">React Development</h1>
        <div className="Text_Animation">
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses} >
          Motivé et rigoureux, je souhaite effectuer un stage dans le secteur du développement web et suis disponible à partir du 3 août 2020 pour une durée de 4 mois. Je suis mobile pour le secteur Luxembourg, Champagne Ardenne.
          </SplitText>
        </div>
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
      </Jumbotron>
    </div>
  )
}

export default Home;