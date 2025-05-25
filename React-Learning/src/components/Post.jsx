import { Link } from "react-router-dom";
import posts from "../utils/posts";
const Post = () => {
  return (
    <div>
      <h1>Post</h1>
      <div>
        {posts.map((post) => {
          return (
            <Link to={`/post/${post.id}`} key={post.id}>
              <div className="border-2 p-4 m-4">
                <h1>{post.id}</h1>
                <h2 className="font-bold">{post.title}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
