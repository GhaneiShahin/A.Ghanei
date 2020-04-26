import React from "react";
import { NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup, Badge } from "react-bootstrap";
import Me from "../assets/me.jpeg";
import {
  faLaptopCode,
  faFilePdf,
  faUser,
  faEnvelopeOpenText,
  faBackward
} from "@fortawesome/free-solid-svg-icons";

const SideNavigation = () => {
  return (
    <div className="sidebar-fixed position-fixed">
      <Link to="/" className="logo-wrapper waves-effect">
        <img alt="Amirreza Ghanei" className="img-fluid myPic mt-3" src={Me} />
      </Link>
      <hr />
      <ListGroup className="list-group-flush">
        <NavLink to="/dashboard/about" activeClassName="activeClass">
          <ListGroup.Item>
            <FontAwesomeIcon icon={faUser} className="mr-3" />
            About
          </ListGroup.Item>
        </NavLink>
        <NavLink to="/dashboard/skills" activeClassName="activeClass">
          <ListGroup.Item>
            <FontAwesomeIcon icon={faLaptopCode} className="mr-3" />
            Knowledge
          </ListGroup.Item>
        </NavLink>
        <NavLink to="/dashboard/documents" activeClassName="activeClass">
          <ListGroup.Item>
            <FontAwesomeIcon icon={faFilePdf} className="mr-3" />
            Documents
            <Badge className="badge-info ml-1">3</Badge>
          </ListGroup.Item>
        </NavLink>
        <NavLink to="/dashboard/contact" activeClassName="activeClass">
          <ListGroup.Item>
            <FontAwesomeIcon icon={faEnvelopeOpenText} className="mr-3" />
            Contact
          </ListGroup.Item>
        </NavLink>
        <Link to="/A.Ghanei">
          <ListGroup.Item>
            <FontAwesomeIcon icon={faBackward} className="mr-3" />
            Back to Main
          </ListGroup.Item>
        </Link>
      </ListGroup>
    </div>
  );
};

export default SideNavigation;
