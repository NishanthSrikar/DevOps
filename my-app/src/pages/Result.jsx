// src/pages/Result.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  return (
    <div style={{ padding: 20 }}>
      <h2>Quiz Finished!</h2>
      <p>Your Score: {state.score}/{state.total}</p>
      <Link to="/topics"><button>Back to Topics</button></Link>
    </div>
  );
}
