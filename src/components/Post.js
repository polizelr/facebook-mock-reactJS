import React from 'react';

import './Post.css';

import Comment from './Comment';

const Post = ({post}) => {
    return(
        <div className="post-container">
            <div className="post">                                
                <img src={`${post.author.avatar}`} />
                <div className="post-information">
                    <h2>{post.author.name}</h2>
                    <h3>{post.date}</h3>
                </div>
            </div>
            <div className="post-content">
                <h2>{post.content}</h2>
            </div>
            <hr />
            <div className="comment-container">
                {post.comments.map(comment => <Comment key={`${post.id}${comment.id}`} comment={comment}/>)}                                
            </div>
        </div>
    );
}

export default Post;