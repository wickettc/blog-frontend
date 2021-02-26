import React from 'react';

const CommentDiv = ({ author, commentbody, time }) => {
    return (
        <div
            style={{ border: '1px solid black', margin: '5px' }}
            className="comment-div-container"
        >
            <p>{commentbody}</p>
            <p>Created: {time}</p>
            <p>By: {author}</p>
        </div>
    );
};

export default CommentDiv;
