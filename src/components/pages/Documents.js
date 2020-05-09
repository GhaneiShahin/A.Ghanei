import React from "react";

import { Card, Button, Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Page from "react-page-loading";
import Slide from "react-reveal/Zoom";
import b2 from "../../assets/b2.jpg";
import cv from "../../assets/cv.jpg";
import code from "../../assets/code.jpg";
import b2Pdf from "../../assets/pdf/b2.pdf";
import codePdf from "../../assets/pdf/zertifikat.pdf";
import cvPdf from "../../assets/pdf/cv.pdf";

const Documents = () => {
  const documentsPageTitle = "Documents/Amirreza Ghanei";

  return (
    <Page loader={"bar"} color={"#17a2b8"} size={10} duration={2}>
      <Col className="mt-5">
        <Helmet>
          <title>{documentsPageTitle}</title>
        </Helmet>
        <Slide>
          <Row className="d-flex justify-content-around mt-5 mb-5 docus">
            <Card
              className="mt-3 mb-4 shadow docus-card"
              style={{ width: "30%" }}
            >
              <Card.Img variant="top" src={code} className="docus-img" />
              <Card.Body>
                <Card.Title className="text-secondary">Certificate</Card.Title>
                <Button
                  variant="outline-info"
                  href={codePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </Button>
              </Card.Body>
            </Card>
            <Card
              className="shadow docus-card mb-4 mt-3"
              style={{ width: "30%" }}
            >
              <Card.Img variant="top" src={b2} className="docus-img" />
              <Card.Body>
                <Card.Title className="text-secondary">
                  German Certificate
                </Card.Title>
                <Button
                  variant="outline-info"
                  href={b2Pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </Button>
              </Card.Body>
            </Card>
            <Card
              className=" mt-3 mb-4 shadow docus-card"
              style={{ width: "30%" }}
            >
              <Card.Img variant="top" src={cv} className="docus-img" />
              <Card.Body>
                <Card.Title className="text-secondary">Resume</Card.Title>
                <Button
                  variant="outline-info"
                  href={cvPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Slide>
      </Col>
    </Page>
  );
};

export default Documents;
