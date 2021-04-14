import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { initializeLogger } from "common/logger";
import Dashboard from "components/Dashboard";
import Signup from "components/Authentication/Signup";
import Login from "components/Authentication/Login";
import { getFromLocalStorage } from "helpers/storage";
import PrivateRoute from "components/Common/PrivateRoute";
import { either, isNil, isEmpty } from "ramda";
import NavBar from "components/NavBar";
import { setAuthHeaders } from "apis/axios";
import ShowPoll from "components/Polls/ShowPoll";
import CreatePoll from "components/Polls/CreatePoll";

const data = [{ title: "Hello" }, { title: "Hello2" }];

const App = () => {
  const [loading, setLoading] = useState(true);
  const authToken = getFromLocalStorage("authToken");
  const isLoggedIn = !either(isNil, isEmpty)(authToken) && authToken !== "null";

  useEffect(() => {
    initializeLogger();
    setAuthHeaders(setLoading);
  }, []);

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} />
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Dashboard} />
        <PrivateRoute
          path="/poll/:id/show"
          redirectRoute="/login"
          condition={isLoggedIn}
          component={ShowPoll}
        />
        <PrivateRoute
          path="/create"
          redirectRoute="/login"
          condition={isLoggedIn}
          component={CreatePoll}
        />
      </Switch>
    </Router>
  );
};

export default App;
