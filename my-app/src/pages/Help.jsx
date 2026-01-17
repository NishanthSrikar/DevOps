// src/pages/Help.jsx
import React from "react";
import FAQAccordion from "../components/FAQAccordion";

const faqs = [
  "How do I start taking quizzes?",
  "What are the difficulty levels?",
  "Can I retake quizzes?",
  "How is my score calculated?",
  "What happens if I exit a quiz midway?",
  "Are the explanations helpful for learning?",
  "How does the leaderboard work?",
  "What topics are available?"
];

export default function Help() {
  return (
    <div className="help">
      <h2>Help & Support</h2>
      <p>Find answers to common questions and get help</p>

      <section>
        <h3>Getting Started</h3>
        <p>Browse topics, select difficulty, and start your quiz journey</p>
        <h3>Taking Quizzes</h3>
        <p>Answer questions, get instant feedback, and learn from explanations</p>
        <h3>Track Progress</h3>
        <p>View scores, check leaderboard, and improve your ranking</p>
      </section>

      <section>
        <h3>Frequently Asked Questions</h3>
        {faqs.map(q => <FAQAccordion key={q} title={q} />)}
      </section>

      <section>
        <h3>Need More Help?</h3>
        <p>Email: support@quizmaster.com</p>
        <p>Live Chat: Mon–Fri, 9AM–5PM</p>
      </section>
    </div>
  );
}
