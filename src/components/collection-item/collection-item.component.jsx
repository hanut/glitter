import React from 'react';

import './style.scss';

const CollectionItem = ({ id, name, price, image }) => (
    <div className="collection-item">
        <div
            className='image'
            style={{
                backgroundImage: `url(${image})`
            }}
            id={id}
        />
        <div className="collection-footer">
            <span className='name'>{name}</span>
            <span className='price'>&#8377;{price}</span>
        </div>
    </div>
)

export default CollectionItem;