import React from "react";

const PostCard = ({ post }) => {
  return (
    <div>
      <h1>{post.node.title}</h1>
      <p> {post.node.excerpt}</p>
    </div>
  );
};

export default PostCard;
