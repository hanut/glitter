import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from "../../store/directory/directory.selectors";

import './style.scss';

const Directory = ({ sections }) => {

    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...otherProps }) => (
                <MenuItem key={id} {...otherProps}/>
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);