import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';



const AddComment = (props) => {

    const inputCommentHandler = (e) => {
        props.inputCommntHandler(e.target.value);
    }

    const addCommentHandler = () => {
        props.addComment();
    }
    return (
        <div className="comment-container" style={{ bottom: '10px' }}>
            <div className="comment-ip">
                <TextField style={{ width: '84%' }} value={props.comment} label="Add a comment" onChange={inputCommentHandler} />
            </div>
            <div className="comment-btn">
                <Button variant="contained" color="primary" className="add-comment" onClick={addCommentHandler}>Add</Button>
            </div>
        </div>
    );
}

export default AddComment;