import React from "react";

import styled from './Footer.module.css';

import gmail from '../../assets/gmail.png';
import facebook from '../../assets/facebook.png';
import whatsapp from '../../assets/whatsapp.png';

const Footer = () =>{
    return(
        <React.Fragment>
            <div className={styled.footerSection}>
                <div className={styled.footerLeft}>
                    <div>
                    <div>
                        <h3>Movie Library</h3>
                    </div>
                    <div className={styled.intro}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </div>
                    </div>
                </div>
                <div className={styled.footerRight}>
                    <div>
                        <div>
                        Social
                        </div>
                        <img src={gmail} />
                        <img src={facebook} />
                        <img src={whatsapp} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;