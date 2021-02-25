import React from 'react';

const AddComment = ({ handleClose }) => {
    return (
        <div>
            <div>AddComment</div>
            <div onClick={() => handleClose()}>X</div>
        </div>
    );
};

export default AddComment;
