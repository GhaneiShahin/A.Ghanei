import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";
import Page from "react-page-loading";
import Slide from "react-reveal/Zoom";

import { Jumbotron, Container } from "react-bootstrap";

const ProfilePage = () => {
  const aboutPageTitle = "About/Amirreza Ghanei";
  const age = Math.floor(
    (new Date() - new Date("11/13/1994")) / 1000 / 60 / 60 / 24 / 365.25
  );

  return (
    <Fragment>
      <Helmet>
        <title>{aboutPageTitle}</title>
      </Helmet>
      <Page loader={"bar"} color={"#17a2b8"} size={10} duration={2}>
        <Slide>
          <Jumbotron
            fluid={true}
            className="mt-5 bg-white shadow-lg jumbotronAbout"
          >
            <Container>
              <h2 className="text-info">Hello,</h2>
              <p className="text-secondary">
                I am Amirreza Ghanei, from Iran, i am {age} years old and i live
                in Germany.
                <br />
                In November 2018 i started to learn Coding at Digital Career
                Institute gGmbH
                <br />
                And finally i finished the one Year Course in December 2019.
                <br />
                After i finished the Course, i started directly to Work as
                Assistant Teacher,
                <br />
                In the same Company and made a lot of greate Experiences.
              </p>
              <p className="text-secondary">
                My Skill is Frontend such as React.js or Vue.js and a little bit
                React Native.
                <br />
                I have also some Knowledge about Backend and Databases,
                <br />
                You can see them all{" "}
                <Link className="text-info" to="/A.Ghanei/dashboard/skills">
                  HERE
                </Link>
                .
              </p>
            </Container>
          </Jumbotron>
        </Slide>
      </Page>
    </Fragment>
  );
};

export default ProfilePage;
