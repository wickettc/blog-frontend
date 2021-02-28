import React from 'react';
import { Link } from 'react-router-dom';
import './PostDiv.css';

const PostDiv = ({ id, title, message, time }) => {
    return (
        <div className="post-div-container">
            <Link to={`/post/${id}`}>
                <h2> {title} </h2>
            </Link>
            {/* <p> {message} </p> */}
            <p>
                Created: <span className="italics">{time} </span>
            </p>
        </div>
    );
};

export default PostDiv;
