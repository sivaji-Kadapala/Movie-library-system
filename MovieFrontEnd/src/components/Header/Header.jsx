import React from 'react';

import {Link} from 'react-router-dom';

import styled from './Header.module.css';

const Header = () => {
    return ( 
        <React.Fragment>
            <div className={styled.navBar}>
                <div>
                <Link to="/home">Home</Link>
                <Link to="/library">Library</Link>
                <Link to="/">About Us</Link>
                <Link to="/">Contact Us</Link>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Header;