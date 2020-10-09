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
          <Route path="/profiles" component={Profiles}/>
         

          <Route path="/" exact component={Landing}/>
        
        </switch>
      </div>
    </Router>
  );
}

export default App;
