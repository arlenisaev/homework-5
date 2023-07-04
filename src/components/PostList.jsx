import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, toggleComments, fetchComments } from '../redux/actions';

const PostList = () => {
  const posts = useSelector(state => state.posts);
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handlePostClick = (postId) => {
    const post = posts?.find((post) => post.id === postId);
    if (post.showComments) {
      dispatch(toggleComments(postId));
    } else {
      dispatch(fetchComments(postId));
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
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

export default PostList;
