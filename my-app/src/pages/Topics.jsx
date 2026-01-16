// src/pages/Topics.jsx
import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const topics = [
  { id: "cyber_security", name: "Cyber Security", description: "Threats, defenses, and best practices." },
  { id: "programming", name: "Programming", description: "Languages, paradigms, and coding challenges." }
];

export default function Topics() {
  return (
    <div style={{ display: "grid", gap: 16, padding: 20 }}>
      {topics.map(t => (
        <Card key={t.id} title={t.name} description={t.description}>
          <Link to={`/quiz/${t.id}/beginner`}>Start Beginner</Link>
        </Card>
      ))}
    </div>
  );
}
