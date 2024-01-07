import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "flowbite";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Posts from "./components/Posts/Posts.jsx";
import CreatePost from "./components/Posts/CreatePost.jsx";
import Notes from "./components/Notes/Notes.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={[<CreatePost />, <Posts />]} />
      <Route path="Posts" element={<Posts />} />
      <Route path="Notes" element={<Notes />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
