import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {

    render() {
        return (
            <>  
                <div className="post-container">
                <CommentSection />
                </div>
            </>
        )
    }
}

export default PostContainer;