import React from "react";
import { Switch, Route } from "react-router-dom";

import "./index.css";
import Page from "react-page-loading";

import Dashboard from "./components/pages/DashboardPage";
import LandingPage from "./components/pages/LandingPage";
import NotFound from "./components/pages/sections/NotFound";

const App = () => {
  return (
    <Page loader={"bar"} color={"#17a2b8"} size={10} duration={2}>
      <div className="flexible-content">
        <Switch>
          <Route path="/A.Ghanei/dashboard" component={Dashboard} />
          <Route path="/A.Ghanei" exact component={LandingPage} />
          {/* <Route component={NotFound} /> */}
          <Route path="*" exact component={NotFound} />
        </Switch>
      </div>
    </Page>
  );
};

export default App;
