import React from 'react';

const AddComment = ({ handleClose, id }) => {
    return (
        <div>
            <div>AddComment</div>
            <div onClick={() => handleClose()}>X</div>
            <form action="http://localhost:3000/blog/comments" method="post">
                {/* <input type='text' name='author' /> */}
                <input type="hidden" value={id} name="postId" />
                <textarea name="commentbody" />
                <button>Add Comments</button>
            </form>
        </div>
    );
};

export default AddComment;
