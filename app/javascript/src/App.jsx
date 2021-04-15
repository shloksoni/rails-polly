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
import { setAuthHeaders, registerIntercepts } from "apis/axios";
import ShowPoll from "components/Polls/ShowPoll";
import { ToastContainer } from "react-toastify";
import CreatePoll from "components/Polls/CreatePoll";
import PageLoader from "components/PageLoader";
const data = [{ title: "Hello" }, { title: "Hello2" }];

const App = () => {
  const [loading, setLoading] = useState(true);
  const authToken = getFromLocalStorage("authToken");
  const isLoggedIn = !either(isNil, isEmpty)(authToken) && authToken !== "null";

  useEffect(() => {
    initializeLogger();
    registerIntercepts();
    setAuthHeaders(setLoading);
  }, []);

  if (loading) {
    return <PageLoader />;
  }
  return (
    <Router>
      <ToastContainer />
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
