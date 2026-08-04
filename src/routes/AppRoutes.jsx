import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import PostPage from "../features/post/pages/PostPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/post/:id" element={<PostPage/>} />
    </Routes>
  );
}

export default AppRoutes;