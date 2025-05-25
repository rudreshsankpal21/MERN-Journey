import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between align-center m-5 p-3 bg-blue-600 text-white">
        <h1>
          <Link to="/">Navbar</Link>
        </h1>
        <ul className="flex gap-3">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
