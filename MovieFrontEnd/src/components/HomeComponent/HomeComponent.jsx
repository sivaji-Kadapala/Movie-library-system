import React from 'react';

import styled from './HomeComponent.module.css';

import ph2 from '../../assets/2.jpg';

import {Link} from 'react-router-dom';

const HomeComponent = () => {
    return ( 
        <React.Fragment>
            
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}} className={styled.homeSec}>
                <div className={styled.leftPane}>
                    Movie <br />Library<br />
                </div>
                <div>
                    <img src={ph2} />
                </div>
                <div  className={styled.rightPane}>
                    <Link to="/library"><button className='btn btn-dark p-5 m-5'>
                        <div >ENTER</div>
                    </button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default HomeComponent;