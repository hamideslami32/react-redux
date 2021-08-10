import React from "react";

export const Post = ({ post }) => {
  const titleStyle = {
    color: "red",
  };
  return (
    <article className="post-excerpt">
      <h2 style={titleStyle}>{post.title}</h2>
      <p>{post.body.substring(0, 100)}</p>
    </article>
  );
};
