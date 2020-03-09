import React from 'react';

import './style.scss';
import * as collections from './collections';


class ShopPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collections
        }
    }

}

export default ShopPage;