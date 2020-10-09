import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/index";
import Profiles from "./Components/Profiles/index";
function App() {
  return (
    <Router>
      <div className={styles.App}>
        <switch>
          <Route path="/profiles">
            <Profiles />
          </Route>

          <Route path="/">
            <Landing />
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
