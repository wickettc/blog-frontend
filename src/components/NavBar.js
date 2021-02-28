import React from 'react';
import { Link } from 'react-router-dom';
import chaseDev from '../imgs/chase_dev_logo.png';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Chase's Blog</Link>
            <a target="__blank" href="https://www.chasewickett.com">
                <img className="nav-img" alt="My logo" src={chaseDev} />
            </a>
        </nav>
    );
};

export default NavBar;
