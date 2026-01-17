// src/pages/Profile.jsx
import React, { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("quizUser"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("quizUser");
    window.location.href = "/"; // redirect to home
  };

  const handleEdit = () => {
    setEditing(true);
  };

 const handleSave = () => {
  const updatedUser = { ...user, password: newPassword || user.password };
  setUser(updatedUser);

  // Update in quizUsers list
  let allUsers = JSON.parse(localStorage.getItem("quizUsers")) || [];
  allUsers = allUsers.map(u =>
    u.username === updatedUser.username ? updatedUser : u
  );

  // ✅ Save back both
  localStorage.setItem("quizUser", JSON.stringify(updatedUser));
  localStorage.setItem("quizUsers", JSON.stringify(allUsers));

  setEditing(false);
};

  if (!user) {
    return <p>No user logged in. Please login first.</p>;
  }

  // Mask password: show *** with last digit visible
  const maskedPassword =
    "*".repeat(user.password.length - 1) + user.password.slice(-1);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="avatar"></div> {/* blank profile picture */}
        <h2>{user.username}</h2>
      </div>

      <p><strong>Stars earned:</strong> {user.stars}</p>
      <p><strong>Total points:</strong> {user.points}</p>
      <p><strong>Password:</strong> {maskedPassword}</p>

      {editing ? (
        <div className="edit-section">
          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <button onClick={handleEdit}>Edit Info</button>
      )}

      <button onClick={handleLogout} className="logout-btn">Logout</button>
    </div>
  );
}
