import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, toggleComments, fetchComments } from '../redux/actions';

const PostList = ({ posts, isLoading, error, fetchPosts, toggleComments, fetchComments }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handlePostClick = (postId) => {
    const post = posts?.find((post) => post.id === postId);
    if (post.showComments) {
      toggleComments(postId);
    } else {
      fetchComments(postId);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Post List</h1>
      {posts?.map((post) => (
        <div key={post.id}>
          <h2 onClick={() => handlePostClick(post.id)}>{post.title}</h2>
          {post.showComments && (
            <ul>
              {post.comments?.map((comment) => (
                <li key={comment.id}>{comment.body}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
  isLoading: state.isLoading,
  error: state.error,
});

const mapDispatchToProps = {
  fetchPosts,
  toggleComments,
  fetchComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
