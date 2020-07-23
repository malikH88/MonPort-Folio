import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, NavItem } from 'reactstrap';
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="Container_Nav">
      <Navbar color="faded" light>
        <Link to="/">
          <NavbarBrand className="mr-auto">
            <div className="Navbar_Title">
              PORT-FOLIO
          </div>
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <div className='Container_Ul'>
            <NavItem>
              <Link to="/projets">
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
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;