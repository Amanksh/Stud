import React, { useState, useEffect } from "react";
import axios from "axios";
import CreatePost from "./components/Posts/CreatePost";
import Posts from "./components/Posts/Posts";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    username: "",
    title: "",
    content: "",
  });

  useEffect(() => {
    // Fetch all posts on component mount
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <CreatePost
        newPost={newPost}
        setNewPost={setNewPost}
        fetchPosts={fetchPosts}
      />

      <Posts posts={posts} />
    </div>
  );
}

export default App;
