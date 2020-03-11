import React from 'react';

import './style.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionItem = ({ id, name, price, image }) => (
    <div className="collection-item">
        <div
            className='image'
            style={{
                backgroundImage: `url(${image})`
            }} />
        <div className="collection-footer">
            <span className='name'>{name}</span>
            <span className='price'>&#8377;{price}</span>
        </div>
    </div>
)

export default CollectionItem;