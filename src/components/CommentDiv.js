import React from 'react';
import './CommentDiv.css';

const CommentDiv = ({ author, commentbody, time }) => {
    return (
        <div className="comment-div-container">
            <p className="comment-body">{commentbody}</p>
            <p>
                Created: <span className="italics">{time}</span>
            </p>
            <p>
                By: <span className="italics">{author}</span>
            </p>
            <hr />
        </div>
    );
};

export default CommentDiv;
