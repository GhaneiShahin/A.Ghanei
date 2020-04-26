import React from "react";

import "../../../index.css";

import { Link } from "react-router-dom";

import { Col, Button } from "react-bootstrap";

const NotFound = () => {
  return (
    <Col
      className="align-items-center text-center"
      style={{ marginTop: "150px" }}
    >
      <h2 className="h2-responsive mt-3 mb-2 text-info mt-5">
        <b className="text-secondary mr-3" style={{ fontSize: "60px" }}>
          404
        </b>
        .That's an error.
      </h2>
      <h4 className="text-info mb-5">
        The requested URL was not found on this server.
      </h4>
      <Link to="/A.Ghanei">
        <Button variant="outline-secondary">
          <span className="fa fa-backward mr-3" />
          Back to Main
        </Button>
      </Link>
    </Col>
  );
};

export default NotFound;
