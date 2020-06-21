import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, NavItem } from 'reactstrap';
import SplitText from 'react-pose-text';

import { Link } from "react-router-dom";
import '../Css/NavBar.css';

const wordPoses = {
  draggable: true
};

const charPoses = {
  drag: {
    y: 0,
    transition: ({ charInWordIndex }) => ({
      type: 'spring',
      velocity: 100 * Math.sin(1 + charInWordIndex),
      damping: 10
    })
  },
  dragEnd: {
    y: 0,
    transition: {
      type: 'spring',
      damping: 1,
      stiffness: 1000
    }
  }
};

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="Container_Nav">
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          <div className="Navbar_Title">
            PORT-FOLIO
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="Burger_Menu" />
        <Collapse isOpen={!collapsed} navbar>
          <div className='Container_Ul'>
            <NavItem>
              <Link to="/Projets">
                <p className="Link_Navigation">
                  <SplitText wordPoses={wordPoses} charPoses={charPoses}>
                    Project
                  </SplitText>
                </p>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Curriculum_Vitae">
                <p className="Link_Navigation">
                  <SplitText wordPoses={wordPoses} charPoses={charPoses}>
                    Curriculum Vitae
                  </SplitText>
                </p>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Contact">
                <p className="Link_Navigation">
                  <SplitText wordPoses={wordPoses} charPoses={charPoses}>
                    Contact
                  </SplitText>
                </p>
              </Link>
            </NavItem>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;