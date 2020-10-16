import React from 'react';
import Styles from '../styles.module.scss';

function CodeSnippet(props) {
    return (
        <div className={Styles.section}>
        
        <div className={Styles.snippet}>

        <p className={Styles.code}>$ {props.code}</p>
        </div>

                        {/* code description */}
        <p className={Styles.codeDescription}>{props.description}</p>
        </div>
    )
}

export default CodeSnippet;
