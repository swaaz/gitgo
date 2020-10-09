import React from 'react';
import Profile from './profile';
import Styles from "./styles.module.scss";

function Profiles() {
    return (
        <div className={Styles.profiles}>
            <div className={Styles.heading}>
                <h1>Profiles</h1>
                <div className={Styles.line}></div>
            </div>
            <div className={Styles.profileList}>
                <Profile />
                <Profile />
            </div>
        </div>
    )
}

export default Profiles;