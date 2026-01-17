// src/components/FAQAccordion.jsx
import React, { useState } from "react";

export default function FAQAccordion({ title }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <div className="faq-title" onClick={() => setOpen(!open)}>{title}</div>
      {open && <div className="faq-content">Answer coming soon...</div>}
    </div>
  );
}

