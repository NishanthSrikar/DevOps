// src/components/Card.jsx
import React from "react";

export default function Card({ title, description, children }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16 }}>
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
}
