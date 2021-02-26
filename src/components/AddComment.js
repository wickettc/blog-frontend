import React, { useState } from 'react';
import { postComment } from '../api/blogCall';

const AddComment = ({ handleClose, id }) => {
    const [commentbody, setCommentbody] = useState('');

    const handleChange = (e) => {
        setCommentbody(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postComment(id, commentbody);
        // handleClose(true) to cause fetch to display newly added comment
        handleClose(true);
    };

    return (
        <div>
            <div>AddComment</div>
            {/* handleClose(false) so refetch does not occur */}
            <div onClick={() => handleClose(false)}>X</div>
            <form onSubmit={handleSubmit}>
                {/* <input type='text' name='author' /> */}
                <input type="hidden" value={id} name="postId" />
                <textarea
                    onChange={handleChange}
                    name="commentbody"
                    value={commentbody}
                />
                <button>Add Comment</button>
            </form>
        </div>
    );
};

export default AddComment;
