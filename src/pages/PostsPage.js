import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, postsSelector } from "../slices/posts";
import { Post } from "../components/Post";

const PostsPage = () => {
  const dispatch = useDispatch();
  const { posts, loading, hasError } = useSelector(postsSelector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasError) return <p>Unable to display posts</p>;
    return posts.map((post) => <Post key={post.id} post={post} excerpt />);
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

// const mapStateToProps = (state) => state.posts;

export default PostsPage;
