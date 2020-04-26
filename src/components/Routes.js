import React from "react";
import { Route, Switch } from "react-router-dom";

import Page from "react-page-loading";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Documents from "./pages/Documents";
import Contact from "./pages/Contact";
import NotFound from "./pages/sections/NotFound";

const Routes = () => {
  return (
    <Page loader={"bar"} color={"#17a2b8"} size={10} duration={2}>
      <Switch>
        <Route path="/dashboard/about" component={About} />
        <Route path="/dashboard/skills" component={Skills} />
        <Route path="/dashboard/documents" component={Documents} />
        <Route path="/dashboard/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Page>
  );
};

export default Routes;
