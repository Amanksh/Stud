import React, { useState } from "react";
import axios from "axios";

const CreatePost = (props) => {
  const [newPost, setNewPost] = useState({
    username: "",
    title: "",
    content: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newPost);
    try {
      // Send a POST request to create a new post
      await axios.post(
        "https://copy-paste-xj2d.onrender.com/api/posts",
        newPost
      );
      // Refresh the posts after creating a new on
      // Clear the form fields
      setNewPost({
        username: "",
        title: "",
        content: "",
      });
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };
  return (
    <div className="p-10 mt-10">
      <form className="max-w-sm mx-auto text-black shadow-lg rounded-lg p-10">
        <h1 className="text-center font-bold text-2xl mb-5">Create Post</h1>
        <div>
          <label
            htmlFor="small-input"
            className="block mb-2 text-m font-medium text-gray-900"
          >
            Username
          </label>
          <input
            type="text"
            id="small-input"
            name="username"
            value={newPost.username}
            onChange={handleInputChange}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-m font-medium text-gray-900"
          >
            Title
          </label>
          <input
            type="text"
            id="base-input"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="large-input"
            className="block mb-2 text-m font-medium text-gray-900"
          >
            Content
          </label>
          <input
            type="text"
            id="large-input"
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="p-2 bg-blue-400 rounded-lg font-bold hover:bg-red-500 hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreatePost;
