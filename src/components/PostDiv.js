import React from 'react';
import { Link } from 'react-router-dom';

const PostDiv = ({ id, title, message, time }) => {
    return (
        <div
            style={{ border: '1px solid black', margin: '5px' }}
            className="post-div-container"
        >
            <Link to={`/post/${id}`}>
                <h2> {title} </h2>
            </Link>
            <p> {message} </p>
            <p> {time} </p>
        </div>
    );
};

export default PostDiv;
