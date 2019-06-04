import React from 'react'
import Comment from './Comment';



const CommentSection = (props) => {
    return (
      <div>
        {props.comments.map((comment) => {
        return (
         <Comment comment={comment}/>
        )
      })}

      <input type="text" placeholder="Add a comment ..."/>

      </div>
    )
  };

export default CommentSection

