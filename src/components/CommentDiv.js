import React from 'react';

const CommentDiv = ({ commentbody, time }) => {
    return (
        <div className="comment-div-container">
            <p>{commentbody}</p>
            <p>{time}</p>
        </div>
    );
};

export default CommentDiv;
