import React from "react";
import Navbar from "./Navbar";
import Styles from "./styles.module.scss";
import GitHub from '../../assets/logo/github.png';
// import Background from '../../assets/background/background.jpg'
import Logo from '../../assets/logo/gitifylogo.png';

function Landing() {
  return (
    <section className={Styles.landing}>
      
      <div className={Styles.background} />
      
      <div className={Styles.app}>

        <div className={Styles.header}>
            <a href='/'>
              <img src={Logo} alt='GitHub' />
            </a>
        </div>

        <div className={Styles.row}>
          <div>
            <Navbar />
          </div>
          <div className={Styles.hero}>
            <p>GitGo</p>
          </div>
        </div>

        <div className={Styles.footers}>
            <a href='https://github.com/swaaz/gitify'>
              <img src={GitHub} alt='GitHub' />
            </a>
        </div>
    </div>
    </section>
  );
}

export default Landing;
