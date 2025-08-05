import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between align-center m-5 p-3 bg-blue-600 text-white">
      <h1>Navbar</h1>
      <ul className="flex gap-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
