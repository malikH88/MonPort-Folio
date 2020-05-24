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
      velocity: 75 * Math.sin(1 + charInWordIndex),
      damping: 10
    })
  },
  dragEnd: {
    y: 0,
    transition: {
      type: 'spring',
      damping: 1,
      stiffness: 1
    }
  }
};

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="Container_Nav">
      <Navbar color="faded" light>
        <NavbarToggler onClick={toggleNavbar} className="Burger_Menu" />
        <NavbarBrand href="/" className="mr-auto">
          <div className="Navbar_Title">
            <SplitText wordPoses={wordPoses} charPoses={charPoses}>
              PORT-FOLIO
            </SplitText>
          </div>
        </NavbarBrand>
        <Collapse isOpen={!collapsed} navbar>
          <div className='Container_Ul'>
            <NavItem>
              <Link to="/Projets">PROJECT</Link>
            </NavItem>
            <NavItem>
              <Link to="/Curriculum_Vitae">CV</Link>
            </NavItem>
            <NavItem>
              <Link to="/Contact">CONTACT</Link>
            </NavItem>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;