import React from 'react';
import Styles from './styles.module.scss';
import GitHub from '../../assets/logo/github.png';
import Twitter from '../../assets/logo/twitter.png';
import Linkedin from '../../assets/logo/linkedin.png';
import Instagram from '../../assets/logo/instagram.png';
import Logo from '../../assets/logo/gitifylogo.png';


function About() {
    return (
        <div className={Styles.about}>
            
            <div className={Styles.header}>
                <a href='/'>
                <img src={Logo} alt='Gitify' />
                </a>
            </div>
            <div className={Styles.heading}>
                <h1>About</h1>
                <div className={Styles.line}></div>
            </div>

            <div className={Styles.hero}>

                <div className={Styles.centerSection}>

                    <img src='https://avatars1.githubusercontent.com/swaaz' className={Styles.profileImage} alt='Swaaz' />
                    <p className={Styles.name} >Swasthik Shetty</p>
                    <p className={Styles.introduction}>
                    An ambitious self-taught developer and designer. I'm a code freak and a tech- enthusiast. I design and build cool stuff in my leisure time. I like to code things from scratch, and enjoy bringing ideas to life. I am a GitHub Campus Expert and I lead communities like Microsoft student community, Hack Club and Sahyadri Open-Source Community.
                    </p>

                </div>

                <div className={Styles.socialMedia}>
                    <a href='https://github.com/swaaz'>
                        <img src={GitHub} />
                    </a>
                    <a href='https://twitter.com/Swaaz07'>
                        <img src={Twitter} />
                    </a>
                    <a href='https://www.linkedin.com/in/swasthik-shetty-b50928174/'>
                        <img src={Linkedin} />
                    </a>
                    <a href='https://www.instagram.com/_swaaz_/?hl=en'>
                        <img src={Instagram} />
                    </a>
                </div>

            </div>
            
            <div className={Styles.footer}>
                <p>Inspired by <a href='https://gitme.js.org/'>Gitme</a> | Built by <span>Swaaz</span></p>
            </div>
            
        </div>
    );
}

export default About;
