import React from "react";

import { Link } from "react-router-dom";

import "../../index.css";

import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Page from "react-page-loading";
import Slide from "react-reveal/Zoom";
import LandingPageNavbar from "./sections/LandingPageNavbar";

import Me from "../../assets/me2.jpeg";

const LandingPage = () => {
  const landingPageTitle = "Welcome/Amirreza Ghanei";
  return (
    <Page loader={"bar"} color={"#17a2b8"} size={10} duration={2}>
      <div className="landingPage">
        <Helmet>
          <title>{landingPageTitle}</title>
        </Helmet>
        <LandingPageNavbar />
        <header className="text-white text-center landingBtn">
          <div className="container d-flex align-items-center justify-content-around flex-row landingDiv">
            <Slide>
              <img
                style={{
                  borderTopLeftRadius: "50px",
                  borderBottomLeftRadius: "50px"
                }}
                className="mb-5 mt-5 shadow img-fluid me p-2 landingImgRes"
                src={Me}
                alt="hello"
              />
            </Slide>
            <Slide>
              <div>
                <h2 className="text-uppercase mb-0 landingH2">
                  <b className="text-danger">hi,</b> i am amirreza ghanei
                  <br /> i am a frontend developer
                </h2>
                <Link to="/dashboard/about">
                  <Button
                    variant="danger"
                    className="mt-4"
                    style={{ boxShadow: "0 8px 6px -6px black" }}
                  >
                    Learn more about me
                  </Button>
                </Link>
              </div>
            </Slide>
          </div>
        </header>
      </div>
    </Page>
  );
};

export default LandingPage;
