// src/pages/Quiz.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data/cyber_security.json";
import Button from "../components/Button";

export default function Quiz() {
  const { topicId, level } = useParams();
  const navigate = useNavigate();
  const questions = data[level];
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) setScore(score + 1);
    if (current + 1 < questions.length) setCurrent(current + 1);
    else navigate(`/result/${topicId}/${level}`, { state: { score, total: questions.length } });
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>{questions[current].question}</h3>
      {questions[current].options.map((opt, i) => (
        <Button key={i} onClick={() => handleAnswer(opt)}>{opt}</Button>
      ))}
    </div>
  );
}
