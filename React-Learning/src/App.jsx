import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import PostDets from "./components/PostDets";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/:id" element={<PostDets />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
