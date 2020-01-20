import React from 'react';




const Layout =(props) =>{

    return(
        <div>
            {/* <Toolbar /> */}
            <main>{props.children}</main>
        </div>
    )
}

export default Layout;