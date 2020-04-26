import React from "react";
import * as moment from "moment";
import { Nav, Navbar, Button, NavDropdown, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faXing,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const TopNavigation = () => {
  const currentDate = moment().format("MMMM Do YYYY");

  return (
    <Navbar bg="light" expand="lg" className="fixed-top shadow flexible-navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Menu" id="basic-nav-dropdown" className="ml-4">
            <Link to="/dashboard/about" className="ml-4 text-secondary">
              About
            </Link>
            <br />
            <Link to="/dashboard/skills" className="ml-4 text-secondary">
              Knowledge
            </Link>
            <br />
            <Link to="/dashboard/documents" className="ml-4 text-secondary">
              Documents
            </Link>
            <br />
            <Link to="/dashboard/contact" className="ml-4 text-secondary">
              Contact
            </Link>
            <br />
            <NavDropdown.Divider />
            <Link to="/" className="ml-4 text-dark">
              Back to Main
            </Link>
            <br />
          </NavDropdown>
        </Nav>
        <Nav className="mr-3">
          <NavDropdown
            title="Follow me"
            id="basic-nav-dropdown"
            className="ml-4"
          >
            <Dropdown.Item
              active={false}
              href="https://github.com/GhaneiShahin"
              className="text-secondary"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2 text-info" />
              Github
            </Dropdown.Item>
            <Dropdown.Item
              active={false}
              href="https://www.xing.com/profile/AmirrezaShahin_Ghanei"
              className="text-secondary"
            >
              <FontAwesomeIcon icon={faXing} className="mr-2 text-info" />
              Xing
            </Dropdown.Item>{" "}
            <Dropdown.Item
              href="https://www.linkedin.com/in/amirreza-ghanei-56b69a176"
              active={false}
              className="text-secondary"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-info" />
              Linkedin
            </Dropdown.Item>{" "}
            <NavDropdown.Divider />
            <Link to="/dashboard/contact" className="ml-4 text-dark">
              Contact me
            </Link>
            <br />
          </NavDropdown>
        </Nav>
        <Button
          href="#"
          variant="outline-info"
          disabled
          style={{ pointEvents: "none" }}
        >
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
          {currentDate}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavigation;
