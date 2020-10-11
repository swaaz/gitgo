import React from 'react';
import Styles from './styles.module.scss';

function Leftside() {
    return (
        <div className={Styles.leftSide}>

            <a href='#installGit'><p>Install GIT</p></a>
            <a href='#configureTooling'><p>Configure Tooling</p></a>
            <a href='#createRepositories'><p>Create Repositories</p></a>
            <a href='#makeChanges'><p>Make Changes</p></a>
            <a href='#groupChanges'><p>Group Changes</p></a>
            <a href='#refactorFilenames'><p>Refactor Filenames</p></a>
            <a href='#suppressTracking'><p>Suppress Tracking</p></a>
            <a href='#saveFragments'><p>Save Fragments</p></a>
            <a href='#reviewHistory'><p>Review History</p></a>
            <a href='#redoCommits'><p>Redo Commits</p></a>
            <a href='#synchronizeChanges'><p>Synchronize Change</p></a>
            
        </div>
    )
}

export default Leftside;
