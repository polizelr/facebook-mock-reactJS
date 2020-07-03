import React from 'react';

import './Comment.css';

const Comment = ({comment}) => {
    return(
        <div className="comment">
            <img src={`${comment.author.avatar}`}/>
            <div className="information">
                <span className="name">{comment.author.name} </span>
                <span className="content">{comment.content}</span>
            </div>            
        </div>
    );
}

export default Comment;