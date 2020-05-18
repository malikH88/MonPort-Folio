import React, { useState } from 'react';
import '../Css/Home.css';
import { Jumbotron, Button, Collapse, Card, CardBody } from 'reactstrap';

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <div>
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
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