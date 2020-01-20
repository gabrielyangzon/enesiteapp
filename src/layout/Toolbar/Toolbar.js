import React from 'react';
import styles from  './Toolbar.module.css'
import NavigationItems from './NavigationItems/NavigationItems';

const Toolbar =()=>{
    return(<header className={styles.header}>
            <NavigationItems />
       </header>)
}

export default Toolbar;