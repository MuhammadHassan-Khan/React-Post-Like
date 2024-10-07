import React, { useState } from 'react';
import './Post.css';

const Post = () => {
  
  const [liked, setLiked] = useState(false); 
  const [likesCount, setLikesCount] = useState(0);


  const handleLike = () => {
    setLikesCount(liked ? likesCount - 1 : likesCount + 1); 
    setLiked(!liked);
  };

  return (
    <div className="post-container">
  
      <img src="../public/img.jpeg" alt="Post Image" className="post-image" />
      
 
      <div className="post-content">
        <p className="post-text">This is a beautiful post with a nice image!</p>
        

        <div className="likes-section">
          <p className="likes-count">Total Likes: {likesCount}</p>

       
          <button 
            onClick={handleLike} 
            className={`like-button ${liked ? 'liked' : 'unliked'}`}
          >
            {liked ? 'Unlike' : 'Like'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
