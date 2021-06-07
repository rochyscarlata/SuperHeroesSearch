import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Login from "../components/login/Login";
import DashboardRoutes from "./DashboardRoutes";

export default function ApRouter() {
  return (
    <Router>
      <div>

        <Switch>
          <Route exact path="/login" component={Login}>
            
          </Route>
          <Route  path="/" component={DashboardRoutes}>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}