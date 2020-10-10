import React from "react";
import { Link } from "react-router-dom";
import Styles from "./styles.module.scss";

function Navbar() {
  return (
    <div className={Styles.navbarSection}>
      <div className={Styles.line}></div>
      <nav>
          <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/instructions'>Instructions</Link></li>
              <li><Link to='/profiles'>Profiles</Link></li>
              <li><Link to='/cheatsheet'>Cheatsheet</Link></li>
              <li><Link to='/about' >About</Link></li>
          </ul>
      </nav>
      <div className={Styles.line}></div>
    </div>
  );
}

export default Navbar;
