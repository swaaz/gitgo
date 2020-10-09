import React from "react";
import Navbar from "./Navbar";
import Styles from "./styles.module.scss";

function Landing() {
  return (
    <div className={Styles.app}>
      <div className={Styles.row}>
        <div>
          <Navbar />
        </div>
        <div className={Styles.hero}>
          <p>Gifity</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
