import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, NavItem } from 'reactstrap';
import { Link } from "react-router-dom";
import '../Css/NavBar.css';

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="Container_Nav">
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto Navbar_Title">Port-folio</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <div className='Container_Ul'>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/Projets">Projets</Link>
            </NavItem>
            <NavItem>
              <Link to="/MonCV">MonCV</Link>
            </NavItem>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;