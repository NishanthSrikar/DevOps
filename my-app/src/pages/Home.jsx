// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Load user from localStorage if already logged in
    const storedUser = localStorage.getItem("quizUser");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // src/pages/Home.jsx (login part)
const handleLogin = (e) => {
  e.preventDefault();
  if (username && password) {
    const userData = { username, password, stars: 0, points: 0 };

    // Get existing users
    const existingUsers = JSON.parse(localStorage.getItem("quizUsers")) || [];

    // Check if user already exists
    const found = existingUsers.find(u => u.username === username);
    if (!found) {
      existingUsers.push(userData);
    }

    localStorage.setItem("quizUsers", JSON.stringify(existingUsers));
    localStorage.setItem("quizUser", JSON.stringify(userData)); // current session user
    setUser(userData);
  } else {
    alert("Please enter username and password");
  }
};

  if (!user) {
    return (
      <div className="login">
        <h2>Login to Quiz Master</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="home">
      <h1>Welcome to Quiz Master, {user.username}!</h1>
      <p>Test your knowledge, track progress, and master programming concepts through interactive quizzes.</p>
      <Link to="/topics"><button>Start Taking Quizzes</button></Link>
    </div>
  );
}
