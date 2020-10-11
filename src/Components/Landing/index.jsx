import React from "react";
import Navbar from "./Navbar";
import Styles from "./styles.module.scss";
import GitHub from '../../assets/logo/github.png';
// import  from '../../assets/logo/github.png';

function Landing() {
  return (
    <div className={Styles.app}>
        <div className={Styles.row}>
          <div>
            <Navbar />
          </div>
          <div className={Styles.hero}>
            <p>Gitify</p>
          </div>
        </div>
        <div className={Styles.footers}>
            <a href='swaaz.me'>
              <img src={GitHub} alt='GitHub' />
            </a>
        </div>
    </div>
  );
}

export default Landing;
