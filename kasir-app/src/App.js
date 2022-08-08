import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { NavbarComponent } from "./components";
import { Home, Sukses } from "./pages";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavbarComponent />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/sukses" exact>
              <Sukses />
            </Route>
          </Switch>
        </main>
      </Router>
    )
  }
}
