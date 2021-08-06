import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { FrontLayout, AppRouter } from "./routerUtility";
import Home from "../components/home";
import Resume from "../components/resume";
import Contact from "../components/contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AppRouter path="/" layout={FrontLayout} exact component={Home} />
        <AppRouter
          path="/resume"
          layout={FrontLayout}
          exact
          component={Resume}
        />
        <AppRouter
          layout={FrontLayout}
          path="/contact"
          exact
          component={Contact}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
