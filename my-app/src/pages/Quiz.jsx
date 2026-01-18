// src/pages/Quiz.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";

// Import all topic data
import aimlData from "../data/aiml.json";
import dsData from "../data/ds.json";
import javaData from "../data/java.json";
import quantumData from "../data/quantum.json";
import reactData from "../data/react.json";
import cppData from "../data/cpp.json";
import pythonData from "../data/python.json";
import cyberData from "../data/cyber_security.json";

export default function Quiz() {
  const { topicId, level } = useParams(); // topicId = aiml, ds, java, quantum, etc. | level = beginner/advanced
  const navigate = useNavigate();

  // Map topicId to dataset
  const topicMap = {
    aiml: aimlData,
    ds: dsData,
    java: javaData,
    quantum: quantumData,
    react: reactData,
    cpp: cppData,
    python: pythonData,
    cyber_security: cyberData
  };

  const questions = topicMap[topicId]?.[level] || [];
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      // Navigate to result page with score
      navigate(`/result/${topicId}/${level}`, {
        state: {
          score: score + (option === questions[current].answer ? 1 : 0),
          total: questions.length
        }
      });
    }
  };

  if (questions.length === 0) {
    return <p>No questions found for {topicId} ({level}).</p>;
  }

  return (
    <div className="quiz">
      <h2>Topic: {topicId.toUpperCase()} ({level})</h2>
      <h3>Question {current + 1} of {questions.length}</h3>
      <p>{questions[current].question}</p>
      <div className="options">
        {questions[current].options.map((opt, i) => (
          <Button key={i} onClick={() => handleAnswer(opt)}>
            {opt}
          </Button>
        ))}
      </div>
    </div>
  );
}
