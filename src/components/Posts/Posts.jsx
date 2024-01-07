import React, { useState, useEffect } from "react";
import PostCards from "./PostCards";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all posts on component mount
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "https://copy-paste-xj2d.onrender.com/api/posts"
      );
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mb-4">Posts</h1>
      <div className="flex flex-col items-center gap-5 max-w-[80%] m-auto">
        {posts.map((post) => (
          <PostCards post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
