import React from 'react';
import styles from './NavigationItems.module.css'

const NavigationItems = () =>{
    return(
        <ul className={styles.NavigationItems}>
            <li>
                <a  href="/">Home</a>
            </li>
            <li>
                <a href="/">Project</a>
            </li>
            <li className={styles.about}>
                <a  href="/">About</a>
            </li>

            <li>

            </li>
        </ul>
    );
}

export default NavigationItems;