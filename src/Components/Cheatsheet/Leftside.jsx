import React from 'react';
import Styles from './styles.module.scss';

function Leftside() {
    return (
        <div className={Styles.leftSide}>

            <a href='#last'><p>Install GIT</p></a>
            <a href=''><p>Configure Tooling</p></a>
            <a href=''><p>Create Repositories</p></a>
            <a href=''><p>Make Changes</p></a>
            <a href=''><p>Group Changes</p></a>
            <a href=''><p>Refactor Filenames</p></a>
            <a href=''><p>Suppress Tracking</p></a>
            <a href=''><p>Save Fragments</p></a>
            <a href=''><p>Review History</p></a>
            <a href=''><p>Redo Commits</p></a>
            <a href=''><p>Synchronize Change</p></a>
            
        </div>
    )
}

export default Leftside;
