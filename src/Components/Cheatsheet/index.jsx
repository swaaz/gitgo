import React from 'react'
import Leftside from './Leftside';
import Rightside from './Rightside';
import Styles from './styles.module.scss';
import Logo from '../../assets/logo/gitifylogo.png';


function Cheatsheet() {
    return (
        <div className={Styles.cheatsheet}>

            <div className={Styles.header}>
                <a href='/'>
                <img src={Logo} alt='Gitify' />
                </a>
            </div>

            <div className={Styles.heading}>
                <h1>Git Cheatsheet</h1>
                <div className={Styles.line}></div>
            </div>
            
            <div className={Styles.split} >
                <div><Leftside /></div>
                <div><Rightside /></div>
            </div>
        </div>
    )
}

export default Cheatsheet;
