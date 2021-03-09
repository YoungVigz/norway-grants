import React from 'react';
import './Nav.scss'

function Nav({title}) {
    return (
        <div class="nav-list">
            <a href="#">{title}</a>
            <a href="#" class="nav-list__right">Home</a>
            <a href="#" class="nav-list__right">About</a>
        </div>
    );
}

export default Nav;