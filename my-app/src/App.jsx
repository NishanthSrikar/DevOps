// src/App.jsx
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Leaderboard from "./pages/Leaderboard";
import Help from "./pages/Help";
import Profile from "./pages/Profile";

function App() {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("quizUser")) || null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("quizUser", JSON.stringify(user));
    }
  }, [user]);

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/quiz/:topicId/:level" element={<Quiz />} />
        <Route path="/result/:topicId/:level" element={<Result />} />
        <Route path="/leaderboard" element={<Leaderboard user={user} />} />
        <Route path="/help" element={<Help />} /> 
        <Route path="/profile" element={<Profile user={user} setUser={setUser} />} /> 
      </Routes>
    </Router>
  );
}

export default App;
