import React from "react";
import { Link } from "react-router-dom";
import Styles from "./styles.module.scss";

function Navbar() {
  return (
    <div className={Styles.navbarSection}>
      <div className={Styles.line}></div>
      <nav>
          <ul>
             <li><Link to='/profiles'>Home</Link></li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
          </ul>
      </nav>
      <div className={Styles.line}></div>
    </div>
  );
}

export default Navbar;
