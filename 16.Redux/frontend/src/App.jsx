import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/HomePage";
import PublicNavbar from "./components/PublicNavbar";
import Login from "./components/Login";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* Navbar */}
        <PublicNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
