import React from 'react';
import './nav.scss'

function Nav({title}) {
    return (
        <div className="nav-list">
            <div className="nav-list-title">{title}</div>
        </div>
    );
}

export default Nav;