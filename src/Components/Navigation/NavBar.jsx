import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, NavItem } from 'reactstrap';
import { HamburgerElastic } from 'react-animated-burgers';
import { Link } from "react-router-dom";

import DeepLink from '../LoginAdmin/DeepLInk'

import './NavBar.css';

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const [isActive, setIsActive] = useState(false);
  const toggleBurger = () => setIsActive(!isActive);

  return (
    <Navbar color="faded" light>
      <Link to="/">
        <NavbarBrand className="mr-auto">
          <div className="Navbar_Title">
            PORT-FOLIO
          </div>
        </NavbarBrand>
      </Link>
      <HamburgerElastic
        // onClick={toggleBurger}
        onClick={toggleNavbar}
      />
      {/* <NavbarToggler onClick={toggleNavbar} /> */}
      <Collapse isOpen={!collapsed} navbar>
        <div className='Container_Ul'>
          <NavItem>
            <Link to="/project/home">
              <p className="Link_Navigation">Project WEB</p>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/curriculumVitae">
              <p className="Link_Navigation">
                Curriculum Vitae
                </p>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">
              <p className="Link_Navigation">
                Contact
                </p>
            </Link>
          </NavItem>
          <NavItem>
            <DeepLink />
          </NavItem>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;