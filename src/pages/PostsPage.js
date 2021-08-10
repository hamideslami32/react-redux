import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions/postsActions";
import { Post } from "../components/Post";

const PostsPage = ({ dispatch, loading, posts, hasError }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasError) return <p>Unable to display posts</p>;
    return posts.map((post) => <Post key={post.id} post={post} />);
  };
  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  );
};

// Map Rrdux state to React component props and ...

// const mapStateToProps = (state) => ({
//   loading: state.posts.loading,
//   posts: state.posts.posts,
//   hasError: state.posts.hasError,
// });

// Or in this case (map all state)

const mapStateToProps = (state) => state.posts;

export default connect(mapStateToProps)(PostsPage);
