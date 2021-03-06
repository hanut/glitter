import React from 'react';
import { withRouter } from 'react-router-dom';

import './style.scss';


const MenuItem = ({ title, image, routeName, offer, size, match, history }) => (

    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${routeName}`)}>
        <div className='background-image' style={{
            backgroundImage: `url(${image})`
        }} ></div>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
            {offer ?
                <span className='offer'>{offer}</span>
                :
                null
            }
        </div>
    </div>

)

export default withRouter(MenuItem);