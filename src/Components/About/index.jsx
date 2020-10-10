import React from 'react';
import Styles from './styles.module.scss';
import GitHub from '../../assets/logo/github.png';
import Twitter from '../../assets/logo/twitter.png';
import Linkedin from '../../assets/logo/linkedin.png';
import Instagram from '../../assets/logo/instagram.png';

function About() {
    return (
        <div className={Styles.about}>
            <div className={Styles.heading}>
                <h1>About</h1>
                <div className={Styles.line}></div>
            </div>

            <div className={Styles.hero}>
                <div className={Styles.centerSection}>

                    <img src='https://avatars1.githubusercontent.com/swaaz' className={Styles.profileImage} alt='Swaaz' />
                    <p className={Styles.name} >Swasthik Shetty</p>
                    <p className={Styles.introduction}>
                    Hello, sunshinesunny! How are you? Oh, your rays are already making my day brighterrainbow!Hello, sunshinesunny! How are you? Oh, your rays are already making my day brighterrainbow!Hello, sunshinesunny! How are you? Oh, your rays are already making my day brighterrainbow!
                    </p>

                </div>
                <div className={Styles.socialMedia}>
                    <a href=''>
                        <img src={GitHub} />
                    </a>
                    <a href=''>
                        <img src={Twitter} />
                    </a>
                    <a href=''>
                        <img src={Linkedin} />
                    </a>
                    <a href=''>
                        <img src={Instagram} />
                    </a>
                </div>
            </div>
            
        </div>
    );
}

export default About;
