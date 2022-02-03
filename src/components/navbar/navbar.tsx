import * as React from 'react';
import { Component } from 'react';
import './navbar.css';

const Navbar = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, open: boolean, setOpen: Function }) => {

    return (
        <nav className="navbar2">
            <ul className="navbar-nav2">
                {props.children}
            </ul>
        </nav>
    )
}

export default Navbar;