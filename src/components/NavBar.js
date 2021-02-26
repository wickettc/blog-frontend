import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div style={{ width: '100%', backgroundColor: 'gray' }}>
            <Link to="/">HOME</Link>
        </div>
    );
};

export default NavBar;
