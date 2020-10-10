import React from 'react';
import Styles from '../styles.module.scss';


function SubHeading(props) {
    return (
        <div>
            <p className={Styles.subHeading}>{props.subheading}</p>
        </div>
    )
}

export default SubHeading;
