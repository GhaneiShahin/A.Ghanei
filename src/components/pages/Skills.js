import React, { useState } from "react";

import { Helmet } from "react-helmet";
import Page from "react-page-loading";
import Slide from "react-reveal/Zoom";

import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  ProgressBar
} from "react-bootstrap";
import { paginate } from "../Pagination/paginate";
import Pagination from "../Pagination/Pagination";

const Skills = () => {
  const [pros] = useState([
    {
      id: 1,
      title: "Frontend",
      one: "HTML",
      two: "CSS/SASS",
      three: "BS4",
      four: "JS",
      five: "REACT.JS",
      six: "VUE.JS",
      seven: "PUG",
      eight: "REACT.N"
    },
    {
      id: 2,
      title: "Backend",
      one: "NODE.JS",
      two: "EXPRESS",
      three: "",
      four: "",
      five: "",
      six: "",
      seven: "",
      eight: ""
    },
    {
      id: 3,
      title: "Database",
      one: "MONGO",
      two: "MYSQL",
      three: "",
      four: "",
      five: "",
      six: "",
      seven: "",
      eight: ""
    },
    {
      id: 4,
      title: "Languages",
      one: "FARSI",
      two: "GERMAN",
      three: "ENGLISH",
      four: "TURKISH",
      five: "",
      six: "",
      seven: "",
      eight: ""
    }
  ]);

  const [perPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const archiveCourses = paginate(pros, currentPage, perPage);

  const knowledgePageTitle = "Knowledge/Amirreza Ghanei";

  const hundred = 100;
  const ninety = 90;
  const eighty = 80;
  const sixty = 60;
  const fifty = 50;
  const forty = 40;
  const thirty = 30;
  const twenty = 20;

  return (
    <Page loader={"bar"} color={"#17a2b8"} size={10} duration={2}>
      <Col className="mt-5">
        <Helmet>
          <title>{knowledgePageTitle}</title>
        </Helmet>
        <Slide>
          <Row className="justify-content-around">
            {archiveCourses.map((skill) => (
              <Card
                key={skill.id}
                className="col-sm-12 col-md-6 col-lg-5 mt-3 shadow"
              >
                <Card.Body style={{ flex: "none" }}>
                  <Card.Title className="text-info skills-title">
                    {skill.title}
                  </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    {skill.one !== "" ? (
                      <Row className="justify-content-center skills-res">
                        {skill.one}
                        {skill.one === "HTML" ? (
                          <ProgressBar
                            animated
                            variant="info"
                            style={{ width: "70%" }}
                            now={ninety}
                            label={`${ninety}%`}
                            className="ml-3"
                          />
                        ) : null}{" "}
                        {skill.one === "NODE.JS" ? (
                          <ProgressBar
                            animated
                            variant="info"
                            style={{ width: "70%" }}
                            now={twenty}
                            label={`${twenty}%`}
                            className="ml-3"
                          />
                        ) : null}
                        {skill.one === "MONGO" ? (
                          <ProgressBar
                            animated
                            variant="info"
                            style={{ width: "70%" }}
                            now={thirty}
                            label={`${thirty}%`}
                            className="ml-3"
                          />
                        ) : null}
                        {skill.one === "FARSI" ? (
                          <ProgressBar
                            animated
                            variant="info"
                            style={{ width: "70%" }}
                            now={hundred}
                            label={`${hundred}%`}
                            className="ml-3"
                          />
                        ) : null}
                      </Row>
                    ) : null}{" "}
                  </ListGroupItem>
                  <ListGroupItem>
                    {skill.two !== "" ? (
                      <Row className="justify-content-center skills-res">
                        {skill.two}
                        {skill.two === "CSS/SASS" ? (
                          <ProgressBar
                            animated
                            variant="info"
                            style={{ width: "70%" }}
                            now={ninety}
                            label={`${ninety}%`}
                            className="ml-3"
                          />
                        ) : null}{" "}
                        {skill.two === "EXPRESS" ? (
                          <ProgressBar
                            animated
                            variant="info"
                            style={{ width: "70%" }}
                            now={twenty}
                            label={`${twenty}%`}
                            className="ml-3"
                          />
                        ) : null}
                        {skill.two === "MYSQL" ? (
                          <ProgressBar
                            animated
                            variant="info"
                            style={{ width: "70%" }}
                            now={twenty}
                            label={`${twenty}%`}
                            className="ml-3"
                          />
                        ) : null}
                        {skill.two === "GERMAN" ? (
                          <ProgressBar
                            animated
                            variant="info"
                            style={{ width: "70%" }}
                            now={eighty}
                            label={`${eighty}%`}
                            className="ml-3"
                          />
                        ) : null}
                      </Row>
                    ) : null}{" "}
                  </ListGroupItem>
                  {skill.three !== "" ? (
                    <ListGroupItem>
                      <Row className="justify-content-center skills-res">
                        {skill.three}
                        {skill.three === "BS4" ? (
                          <ProgressBar
                            animated
                            variant="info"
                            style={{ width: "70%" }}
                            now={ninety}
                            label={`${ninety}%`}
                            className="ml-3"
                          />
                        ) : null}{" "}
                        {skill.three === "ENGLISH" ? (
                          <ProgressBar
                            animated
                            variant="info"
                            style={{ width: "70%" }}
                            now={sixty}
                            label={`${sixty}%`}
                            className="ml-3"
                          />
                        ) : null}
                      </Row>
                    </ListGroupItem>
                  ) : null}{" "}
                  {skill.four !== "" ? (
                    <ListGroupItem>
                      <Row className="justify-content-center skills-res">
                        {skill.four}
                        {skill.four === "JS" ? (
                          <ProgressBar
                            animated
                            variant="info"
                            style={{ width: "70%" }}
                            now={sixty}
                            label={`${sixty}%`}
                            className="ml-3"
                          />
                        ) : null}{" "}
                        {skill.four === "TURKISH" ? (
                          <ProgressBar
                            animated
                            variant="info"
                            style={{ width: "70%" }}
                            now={fifty}
                            label={`${fifty}%`}
                            className="ml-3"
                          />
                        ) : null}
                      </Row>
                    </ListGroupItem>
                  ) : null}{" "}
                  {skill.five !== "" ? (
                    <ListGroupItem>
                      <Row className="justify-content-center skills-res">
                        {skill.five}
                        {skill.five === "REACT.JS" ? (
                          <ProgressBar
                            animated
                            variant="info"
                            style={{ width: "70%" }}
                            now={sixty}
                            label={`${sixty}%`}
                            className="ml-3"
                          />
                        ) : null}{" "}
                      </Row>
                    </ListGroupItem>
                  ) : null}{" "}
                  {skill.six !== "" ? (
                    <ListGroupItem>
                      <Row className="justify-content-center skills-res">
                        {skill.six}
                        {skill.six === "VUE.JS" ? (
                          <ProgressBar
                            animated
                            variant="info"
                            style={{ width: "70%" }}
                            now={thirty}
                            label={`${thirty}%`}
                            className="ml-3"
                          />
                        ) : null}{" "}
                      </Row>
                    </ListGroupItem>
                  ) : null}{" "}
                  {skill.seven !== "" ? (
                    <ListGroupItem>
                      <Row className="justify-content-center skills-res">
                        {skill.seven}
                        {skill.seven === "PUG" ? (
                          <ProgressBar
                            animated
                            variant="info"
                            style={{ width: "70%" }}
                            now={thirty}
                            label={`${thirty}%`}
                            className="ml-3"
                          />
                        ) : null}{" "}
                      </Row>
                    </ListGroupItem>
                  ) : null}{" "}
                  {skill.eight !== "" ? (
                    <ListGroupItem>
                      <Row className="justify-content-center skills-res">
                        {skill.eight}
                        {skill.eight === "REACT.N" ? (
                          <ProgressBar
                            animated
                            variant="info"
                            style={{ width: "70%" }}
                            now={thirty}
                            label={`${thirty}%`}
                            className="ml-3"
                          />
                        ) : null}{" "}
                      </Row>
                    </ListGroupItem>
                  ) : null}{" "}
                </ListGroup>
              </Card>
            ))}
          </Row>
        </Slide>
        <Pagination
          totalPros={pros.length}
          currentPage={currentPage}
          perPage={perPage}
          onPageChange={handlePageChange}
        />
      </Col>
    </Page>
  );
};

export default Skills;
