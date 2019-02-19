import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./login";
import Signup from "./signup.js";
import Main from "./main.js";
import "./style.css";
import "./mainpage_style.css";

// import Home from "C:learn/blog/blog/src/components/Home.jsx";
class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <Route path="/login" render={props => <Login {...props} />} />
          <Route path="/signup" render={props => <Signup {...props} />} />
          <Route path="/main" render={props => <Main {...props} />} />
        </div>
      </Router>
    );
  }
}

export default App;
