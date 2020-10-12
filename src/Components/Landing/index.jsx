import React from "react";
import Navbar from "./Navbar";
import Styles from "./styles.module.scss";
import GitHub from '../../assets/logo/github.png';
import Background from '../../assets/background/background.jpg'
// import  from '../../assets/logo/github.png';

function Landing() {
  return (
    <section className={Styles.landing}>
      {/* <div className={Styles.bg1} />
      <div className={Styles.bg2} /> */}
      <div className={Styles.background} />
      <div className={Styles.app}>

        <div className={Styles.header}>
            <a href='swaaz.me'>
              <img src={GitHub} alt='GitHub' />
            </a>
        </div>

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
    </section>
  );
}

export default Landing;
