import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1>Uhoh, cannot find that page!</h1>
            <Link className="not-found-a" to="/">
                <button>Go Home</button>
            </Link>
        </div>
    );
};

export default NotFound;
