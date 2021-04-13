import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { initializeLogger } from "common/logger";
import Dashboard from "components/Dashboard";
import Signup from "components/Authentication/Signup";

const data = [{ title: "Hello" }, { title: "Hello2" }];

const App = () => {
  useEffect(() => {
    initializeLogger();
    logger.info("Log from js-logger");
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
};

export default App;
