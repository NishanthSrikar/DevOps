// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome to KnowledgeHub</h2>
      <p>Test your knowledge across multiple topics and levels.</p>
      <Link to="/topics"><button>Start Now</button></Link>
    </div>
  );
}
