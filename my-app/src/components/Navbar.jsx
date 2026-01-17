// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("quizUser"));
    if (storedUser) setUsername(storedUser.username);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">Quiz Master</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
        <li><Link to="/help">Help</Link></li>
      </ul>
      <div className="nav-actions">
        <button>Share</button>
        {username && <Link to="/profile" className="profile">{username}</Link>}
      </div>
    </nav>
  );
}
