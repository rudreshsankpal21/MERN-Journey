import { useEffect, useState } from "react";
import axios from "axios";
const Posts = () => {
  // useState
  const [posts, setposts] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  // useEffect
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((post) => {
        setloading(false);
        // Update the posts
        setposts(post.data);
      })
      .catch((err) => {
        seterror(err);
        setloading(false);
      });
  }, [loading, error]);

  // Display loading
  if (loading) {
    return <h1>Loading....</h1>;
  }

  // Display error
  if (error) {
    return <h1>Something Went Wrong</h1>;
  }
  return (
    <>
      <h1 className="text-4xl text-center">Network Request</h1>
      <div>
        <ul>
          {posts.map((post) => {
            return (
              <li
                className="border-2 p-4 m-4 hover:text-white hover:bg-black transition-all ease-in"
                key={post.id}
              >
                <h1 className="text-2xl">
                  {post.id} :- {post.title}
                </h1>
                <p> {post.body} </p>
              </li>
            );
          })}
        </ul>
        ;
      </div>
      <div>
        <button className="bg-blue-500 text-white p-2 rounded-md">
          Load More
        </button>
      </div>
    </>
  );
};

export default Posts;
