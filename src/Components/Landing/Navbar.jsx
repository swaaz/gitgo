import React from "react";
import { Link } from "react-router-dom";
import Styles from "./styles.module.scss";

function Navbar() {
  return (
    <div className={Styles.navbarSection}>
      <div className={Styles.line}></div>
      <nav>
          <ul>
             <li ><Link className={Styles.navoption} to='/'>Home</Link></li>
              <li><Link to='/profiles'>Profiles</Link></li>
              <li>Cheatsheet</li>
              <li>About</li>
          </ul>
      </nav>
      <div className={Styles.line}></div>
    </div>
  );
}

export default Navbar;
