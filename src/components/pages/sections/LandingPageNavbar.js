import React from "react";

import "../../../index.css";
import Logo from "../../../assets/ghaneiLogo.png";
import { Navbar, NavbarBrand } from "react-bootstrap";

const LandingPageNavbar = () => {
  return (
    <Navbar bg="none" expand="lg" className="">
      <div>
        <NavbarBrand>
          <img src={Logo} alt="logo" className="logo" />
        </NavbarBrand>
      </div>
    </Navbar>
  );
};

export default LandingPageNavbar;
