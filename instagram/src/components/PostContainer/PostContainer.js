import React from 'react'
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
    return (
      <div>
        <img src={props.user.thumbnailUrl} alt="User pic"/>
        <p>{props.user.username}</p>
        <img src={props.user.imageUrl} alt="Posted pic"/>
        <p>{props.user.likes} Likes</p>
        <p>{props.user.timestamp}</p>
        <CommentSection comments={props.user.comments}/>
      </div>
    )
  }
  

export default PostContainer
