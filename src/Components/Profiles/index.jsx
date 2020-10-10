import React from 'react';
import Profile from './profile';
import Styles from "./styles.module.scss";
import {profileList} from '../profileList/profileList';


function Profiles() {
    return (
        <div className={Styles.profiles}>
            <div className={Styles.heading}>
                <h1>Profiles</h1>
                <div className={Styles.line}></div>
            </div>
            <div className={Styles.profileList}>

                {profileList.map((item, index) => {
                    return(
                        <Profile name={item.name} profileImage={item.profileImage} githubURL={item.githubURL} instagramURL={item.instagramURL} twitterURL={item.twitterURL} linkedinURL={item.linkedinURL} />
                    );
                })}

            </div>
        </div>
    )
}

export default Profiles;