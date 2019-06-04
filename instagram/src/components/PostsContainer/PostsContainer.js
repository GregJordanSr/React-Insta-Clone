import React from 'react';
import Post from './Post';
import './Post.css';

const PostsContainer = (props) => {
    return (
      <div className="posts-container-wrapper">
        {props.posts.map(post => <Post key={post.imageUrl} post={post} /> )}
      </div>
    )
  }
  

export default PostsContainer
