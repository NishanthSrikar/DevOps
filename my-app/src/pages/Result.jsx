// src/pages/Result.jsx
import React, { useEffect, useState } from "react";
import { useLocation, Link, useParams } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  const { topicId } = useParams();
  const [message, setMessage] = useState("");

 // src/pages/Result.jsx
useEffect(() => {
  const currentUser = JSON.parse(localStorage.getItem("quizUser"));
  let allUsers = JSON.parse(localStorage.getItem("quizUsers")) || [];

  if (currentUser) {
    currentUser.points += state.score * 100;
    if (state.score === state.total) {
      currentUser.stars += 1;
      setMessage(`🎉 Congratulations ${currentUser.username}! You earned a star in ${topicId}!`);
    }

    // Update in list
    allUsers = allUsers.map(u =>
      u.username === currentUser.username ? currentUser : u
    );

    localStorage.setItem("quizUser", JSON.stringify(currentUser));
    localStorage.setItem("quizUsers", JSON.stringify(allUsers));
  }
}, [state, topicId]);

  return (
    <div className="result">
      <h2>Quiz Completed!</h2>
      <p>Your Score: <strong>{state.score} / {state.total}</strong></p>
      <p>Accuracy: {(state.score / state.total * 100).toFixed(1)}%</p>
      {message && <p className="congrats">{message}</p>}
      <Link to="/topics"><button>Choose Another Topic</button></Link>
    </div>
  );
}
