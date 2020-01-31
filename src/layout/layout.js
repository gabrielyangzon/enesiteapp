import React from 'react';
import Toolbar from './Toolbar/Toolbar'


const Layout =(props) =>{

    return(
        <div>
            <Toolbar />
            <main>{props.children}</main>
        </div>
    )
}

export default Layout;