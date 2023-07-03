export const fetchPostsSuccess = (posts) => ({
  type: 'FETCH_POSTS_SUCCESS',
  payload: posts,
});

export const toggleComments = (postId) => ({
  type: 'TOGGLE_COMMENTS',
  payload: postId,
});

export const fetchCommentsRequest = () => ({
  type: 'FETCH_COMMENTS_REQUEST',
});

export const fetchCommentsSuccess = (comments, postId) => ({
  type: 'FETCH_COMMENTS_SUCCESS',
  payload: {
    comments,
    postId,
  },
});


export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await fetch('https://dummyjson.com/posts?limit=10');
    const data = await response.json();
    dispatch(fetchPostsSuccess(data.posts));
  };
};

export const fetchComments = (postId) => {
  return async (dispatch) => {
    dispatch(fetchCommentsRequest());
      const response = await fetch(`https://dummyjson.com/comments/post/${postId}`);
      const data = await response.json();
      dispatch(fetchCommentsSuccess(data.comments, postId));
  };
};
