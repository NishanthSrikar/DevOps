// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "12px 20px", borderBottom: "1px solid #eee", background: "#f8f9fa" }}>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none", margin: 0, padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
      </ul>
    </nav>
  );
}
