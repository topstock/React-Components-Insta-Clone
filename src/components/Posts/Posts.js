import React from 'react';
import Post from './Post';
import './Posts.css';
import '../../dummy-data'

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { posts, likePost } = props;
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {posts.map( po => <Post likePost={likePost} post={po} /> )}
    </div>
      );
};

export default Posts;
