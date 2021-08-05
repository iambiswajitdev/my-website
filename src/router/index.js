import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { FrontLayout, AppRouter } from "./routerUtility";
import Home from "../components/home";
import Resume from "../components/resume";
import Settings from "../components/settings";

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
          path="/settings"
          exact
          component={Settings}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
