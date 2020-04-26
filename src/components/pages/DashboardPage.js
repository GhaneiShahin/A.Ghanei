import React from "react";
import Routes from "../Routes";
import TopNavigation from "../topNavigation";
import SideNavigation from "../sideNavigation";
import Footer from "../Footer";
import "../../index.css";

const Dashboard = () => {
  return (
    <div className="flexible-content">
      <TopNavigation />
      <SideNavigation />
      <main id="content" className="p-5">
        <Routes />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
