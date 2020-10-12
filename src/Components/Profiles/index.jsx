import React from 'react';
import Profile from './profile';
import Styles from "./styles.module.scss";
import {profileList} from '../profileList/profileList';
import Logo from '../../assets/logo/gitifylogo.png';


function Profiles() {
    return (
        <div className={Styles.profiles}>
            <div className={Styles.header}>
                <a href='/'>
                <img src={Logo} alt='Gitify' />
                </a>
            </div>
            <div className={Styles.heading}>
                <h1>Profiles</h1>
                <div className={Styles.line}></div>
            </div>
            <div className={Styles.profileList}>

                {profileList.map((item, index) => {
                    return(
                        <Profile 
                        name={item.name} 
                        
                        githubUsername={item.githubUsername} 
                        instagramUsername={item.instagramUsername} 
                        twitterUsername={item.twitterUsername} 
                        linkedinURL={item.linkedinURL} />
                    );
                })}

            </div>
        </div>
    )
}

export default Profiles;