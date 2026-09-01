import React, { useEffect, useState } from "react";

function App() {
const [posts, setPosts] = useState([]);   // store data
const [loading, setLoading] = useState(true); // loading state
const [error, setError] = useState(null); // error state

useEffect(() => {
    // fetch data when component mounts
    fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
.then((data) => {
setPosts(data); // save data
setLoading(false);
      })
.catch((err) => {
setError(err.message);
setLoading(false);
      });
  }, []); // [] ensures it runs once when component mounts

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
<div style={{ padding: "20px" }}>
<h1>Posts from API</h1>
<ul>
        {posts.slice(0, 10).map((post) =>( // show first 10 posts
<li key={post.id}>
<strong>{post.title}</strong>
<p>{post.body}</p>
</li>
        ))}
</ul>
</div>
  );
}

export default App;
