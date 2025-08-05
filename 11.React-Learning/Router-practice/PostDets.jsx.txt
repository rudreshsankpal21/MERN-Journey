import React from "react";
import { useParams } from "react-router-dom";
import posts from "../utils/posts";
const PostDets = () => {
  const postId = useParams().id;

  return (
    <div>
      <h1>Post Details {postId}</h1>
      <div className="border-2 p-4 m-4">
        <h1>{posts.find((post) => post.id == postId).id}</h1>
        <h2>{posts.find((post) => post.id == postId).title}</h2>
        <p>{posts.find((post) => post.id == postId).body}</p>
      </div>
    </div>
  );
};

export default PostDets;
