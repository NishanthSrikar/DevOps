// src/components/Accordion.jsx
import React, { useState } from "react";

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", marginBottom: 8 }}>
      <div 
        style={{ padding: 10, cursor: "pointer", background: "#f5f5f5" }}
        onClick={() => setOpen(!open)}
      >
        {title}
      </div>
      {open && <div style={{ padding: 10 }}>{children}</div>}
    </div>
  );
}
