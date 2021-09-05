import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Admin from "./components/pages/Admin";

import Main from "./components/pages/Main";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/admin" exact component={Admin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
