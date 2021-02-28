import React, { useState } from 'react';
import { postComment } from '../api/blogCall';
import './AddComment.css';

const AddComment = ({ handleClose, id }) => {
    const [commentbody, setCommentbody] = useState('');
    const [author, setAuthor] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'commentbody') {
            setCommentbody(e.target.value);
        } else {
            setAuthor(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postComment(author, id, commentbody);
        // handleClose(true) to cause fetch to display newly added comment
        handleClose(true);
    };

    return (
        <div className="add-comment-container">
            {/* handleClose(false) so refetch does not occur */}
            <div className="comment-close" onClick={() => handleClose(false)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                </svg>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text"
                    name="author"
                    value={author}
                    placeholder="Author"
                    required
                />
                <input type="hidden" value={id} name="postId" />
                <textarea
                    onChange={handleChange}
                    name="commentbody"
                    value={commentbody}
                    placeholder="Your Comment"
                    required
                />
                <button>Add Comment</button>
            </form>
        </div>
    );
};

export default AddComment;
