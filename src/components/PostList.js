import React, { Component } from 'react';

import './PostList.css';

class PostList extends Component {
    state={
        posts: [
            {   id: 1,
                author: {
                    name: 'Luis Otávio',
                    avatar: 'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-10-avatar-2754575_120521.png'
                },
                date: '25 Dez 2019',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
                comments: [
                    {
                        id: 1,
                        author: {
                            name: 'Pedro Henrique',
                            avatar: 'https://www.igllu.com.br/wp-content/themes/igllu/assets/img/avatar6.png'
                        },
                        content: 'Donec massa sapien faucibus et molestie ac feugiat sed lectus. Donec et odio pellentesque diam volutpat. Mattis nunc sed blandit libero. Orci eu lobortis elementum nibh.'
                    }
                ]
            },
            {   id: 2,
                author: {
                    name: 'Amanda Alves',
                    avatar: 'https://www.mudancaslonghini.com.br/images/2019/12/05/icon-mulher3.png'
                },
                date: '01 Jan 2020',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
                comments: [
                    {
                        id: 1,
                        author: {
                            name: 'Natália Cristina',
                            avatar: 'https://i.ya-webdesign.com/images/avatar-icon-png-1.png'
                        },
                        content: 'Donec massa sapien faucibus et molestie ac feugiat sed lectus. Donec et odio pellentesque diam volutpat. Mattis nunc sed blandit libero. Orci eu lobortis elementum nibh.'
                    },
                    {
                        id: 2,
                        author: {
                            name: 'Rafael Meira',
                            avatar: 'https://www.pngarts.com/files/3/Avatar-Transparent-Image.png'
                        },
                        content: 'Donec massa sapien faucibus et molestie ac feugiat sed lectus. Donec et odio pellentesque diam volutpat. Mattis nunc sed blandit libero. Orci eu lobortis elementum nibh.'
                    }
                ]
            },
            {   id: 3,
                author: {
                    name: 'Flávia Maria',
                    avatar: 'https://image.flaticon.com/icons/png/512/219/219969.png'
                },
                date: '07 Fev 2020',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
                comments: [
                    {
                        id: 1,
                        author: {
                            name: 'Samanta Felipo',
                            avatar: 'https://image.flaticon.com/icons/png/512/190/190664.png'
                        },
                        content: 'Donec massa sapien faucibus et molestie ac feugiat sed lectus. Donec et odio pellentesque diam volutpat. Mattis nunc sed blandit libero. Orci eu lobortis elementum nibh.'
                    }
                ]
            },
        ]
    }

    render(){
        return(
            <div className="post-list">
                {this.state.posts.map(post => {
                    return(
                        <div key={post.id} className="post-container">
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
                                {post.comments.map(comment => {
                                    return(
                                        <div key={comment.id} className="comment">
                                            <img src={`${comment.author.avatar}`}/>
                                            <div className="information">
                                                <span className="name">{comment.author.name} </span>
                                                <span className="content">{comment.content}</span>
                                            </div>
                                            
                                        </div>
                                    );
                                })}                                
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default PostList;