import React, { useState } from "react";

export default function ChangePassword() {
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock validation
    if (newPass !== confirm) {
      setMessage("❌ Passwords do not match.");
      return;
    }
    if (newPass.length < 6) {
      setMessage("❌ Password must be at least 6 characters.");
      return;
    }
    if (current === "") {
      setMessage("❌ Please enter your current password.");
      return;
    }

    // Mock password update
    setMessage("✅ Password successfully changed!");
    setCurrent("");
    setNewPass("");
    setConfirm("");
  };

  return (
    <div style={{ padding: 20, maxWidth: 400, margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1>🔒 Change Password</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        <input
          type="password"
          placeholder="Current password"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New password"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
        <button type="submit" style={{ padding: 10, cursor: "pointer" }}>Update Password</button>
      </form>
      {message && <p style={{ marginTop: 15 }}>{message}</p>}
    </div>
  );
}
