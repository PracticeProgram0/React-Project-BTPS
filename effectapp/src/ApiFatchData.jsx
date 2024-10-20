import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const data = await response.json();

        setPosts(data);

        setIsLoading(false);
      } catch (error) {
        console.error("Error in fetching data", error);

        setIsLoading(false);
      }
    };
    fetchData();
  });

  return (
    <>
      <h1>Post from json holder API</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;