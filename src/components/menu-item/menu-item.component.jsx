import React from 'react';

import './style.scss';


const MenuItem = ({ title, image, offer, size }) => (

    <div className={`${size} menu-item`}>
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

export default MenuItem;