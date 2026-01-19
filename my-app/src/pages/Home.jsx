// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home({ user, setUser }) {
  const [topUsers, setTopUsers] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("quizUsers")) || [];
    const sorted = [...storedUsers].sort((a, b) => (b.stars || 0) - (a.stars || 0));
    setTopUsers(sorted.slice(0, 3));
  }, []);

  const handleLogin = () => {
    if (!username || !password) return;

    let allUsers = JSON.parse(localStorage.getItem("quizUsers")) || [];
    let existingUser = allUsers.find(u => u.username === username);

    if (existingUser) {
      if (existingUser.password === password) {
        setUser(existingUser);
        localStorage.setItem("quizUser", JSON.stringify(existingUser));
      } else {
        alert("Incorrect password!");
      }
    } else {
      const newUser = { username, password, stars: 0, points: 0 };
      allUsers.push(newUser);
      setUser(newUser);
      localStorage.setItem("quizUser", JSON.stringify(newUser));
      localStorage.setItem("quizUsers", JSON.stringify(allUsers));
    }

    setUsername("");
    setPassword("");
    setShowLogin(false); // close modal after login
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to QuizMaster 🎓</h1>
        {user ? (
          <p>Hello, <strong>{user.username}</strong>! Ready to earn more stars?</p>
        ) : (
          <p>Sharpen your skills and knowledge with interactive quizzes across multiple topics.</p>
        )}
        <div>
          {!user && (
            <button onClick={() => setShowLogin(true)} className="cta-btn">
              Login / Sign Up
            </button>
          )}
        </div>
        <Link to="/topics">
          <button className="cta-btn">Start Learning</button>
        </Link>
      </section>

      {/* Login Modal */}
      {showLogin && (
        <div className="login-modal">
          <div className="login-box">
            <button className="close-btn" onClick={() => setShowLogin(false)}>✖</button>
            <h2>Login to QuizMaster</h2>
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
            <br/>
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section className="features">
        <h2>Why QuizMaster?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>📚 Diverse Topics</h3>
            <p>From Cyber Security to Quantum Computing, explore quizzes tailored to your interests.</p>
          </div>
          <div className="feature-card">
            <h3>⭐ Earn Stars</h3>
            <p>Perfect scores earn stars — track your progress and show off your achievements.</p>
          </div>
          <div className="feature-card">
            <h3>🏆 Leaderboard</h3>
            <p>Compete with friends and peers. See who’s leading in stars earned.</p>
          </div>
          <div className="feature-card">
            <h3>👤 Personalized Profile</h3>
            <p>Edit your profile, choose avatars, and keep track of your quiz history.</p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links">
        <h2>Quick Links</h2>
        <div className="links-grid">
          <Link to="/topics"><button>📖 Topics</button></Link>
          <Link to="/leaderboard"><button>🏆 Leaderboard</button></Link>
          <Link to="/profile"><button>👤 Profile</button></Link>
          <Link to="/help"><button>❓ Help</button></Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to test your knowledge?</h2>
        <Link to="/topics">
          <button className="cta-btn">Choose a Topic</button>
        </Link>
      </section>
    </div>
  );
}
