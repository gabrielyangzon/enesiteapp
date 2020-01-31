import React from 'react';
import {Navbar  , Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
const NavigationItems = () =>{
    return(
        <Navbar className="justify-content-xs-center" fixed="top" expand="lg"  bg="primary" variant="dark">
            <Navbar.Brand >   SUMITOMO </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" >
                        <NavLink  to="/"   style={styles.nonActive}>Home</NavLink>  
                        <NavLink to="/manage"  style={styles.nonActive} >Manage</NavLink> 
                    </Nav>
                </Navbar.Collapse>
        </Navbar> 
    );
}


const styles = {
    nonActive: {
    color: "white",
    margin: "10px",
    },
    active:{
        color:"green"
    }

}

export default NavigationItems;