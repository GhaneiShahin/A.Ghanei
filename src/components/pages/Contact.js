import React from "react";

import { Helmet } from "react-helmet";
import Page from "react-page-loading";
import Slide from "react-reveal/Zoom";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Col, Card, ListGroup, Row } from "react-bootstrap";

import {
  faUser,
  faMapMarkedAlt,
  faBuilding,
  faEnvelope,
  faPhoneSquare
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const contactPageTitle = "Contact/Amirreza Ghanei";

  return (
    <Page loader={"bar"} color={"#17a2b8"} size={10} duration={2}>
      <Col className="mt-5">
        <Helmet>
          <title>{contactPageTitle}</title>
        </Helmet>
        <Slide>
          <Row className="d-flex justify-content-around mt-5 mb-5 contact">
            <Card
              className="mt-4 mb-4 shadow contact-card"
              style={{ width: "40%", height: "300px" }}
            >
              <Card.Header className="text-info">Google Map</Card.Header>
              <Card.Body className="text-center">
                <GoogleMapReact
                  defaultCenter={{ lat: 51.102451, lng: 6.94712 }}
                  defaultZoom={11}
                />
              </Card.Body>
            </Card>
            <Card
              className="mt-4 mb-4 shadow contact-card"
              style={{ width: "40%" }}
            >
              <Card.Header className="text-info">Contact me</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="text-secondary">
                  <FontAwesomeIcon icon={faUser} className="mr-4 ml-4" />
                  Amirreza Ghanei
                </ListGroup.Item>
                <ListGroup.Item className="text-secondary">
                  <FontAwesomeIcon
                    icon={faMapMarkedAlt}
                    className="mr-4 ml-4"
                  />
                  Von-Velbrück-Str.35
                </ListGroup.Item>
                <ListGroup.Item className="text-secondary">
                  <FontAwesomeIcon icon={faBuilding} className="mr-4 ml-4" />
                  40764, Langenfeld
                </ListGroup.Item>
                <ListGroup.Item className="text-secondary">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-4 ml-4" />
                  Ghaneishahin73@gmail.com
                </ListGroup.Item>
                <ListGroup.Item className="text-secondary">
                  <FontAwesomeIcon icon={faPhoneSquare} className="mr-4 ml-4" />
                  (+49) 1637717389
                </ListGroup.Item>
              </ListGroup>
            </Card>{" "}
          </Row>
        </Slide>
      </Col>
    </Page>
  );
};

export default Contact;
