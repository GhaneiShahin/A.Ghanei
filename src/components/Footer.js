import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="fixed-bottom">
      <div
        style={{
          height: "20px",
          backgroundColor: "none",
          boxShadow: "0 12px 10px -4px gray",
        }}
      ></div>
      <footer className="flexible-navbar footer">
        <p className="pb-2 mt-2 text-center text-info">
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <Link
            to="/"
            style={{ textDecoration: "none" }}
          >
            {" "}
            Amirreza Ghanei{" "}
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
