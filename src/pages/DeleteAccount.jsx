import React, { useState } from "react";

export default function DeleteAccount() {
  const [confirmed, setConfirmed] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const handleDelete = () => {
    if (!confirmed) {
      setConfirmed(true);
    } else {
      setDeleted(true);
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "red" }}>🗑️ Delete Account</h1>
      {deleted ? (
        <p>✅ Your account has been successfully deleted (mock).</p>
      ) : (
        <>
          <p><strong>Warning:</strong> This action is <span style={{ color: "red" }}>irreversible</span>. All your data will be lost.</p>
          <button
            onClick={handleDelete}
            style={{
              padding: 10,
              cursor: "pointer",
              backgroundColor: confirmed ? "darkred" : "red",
              color: "white",
              border: "none",
              marginTop: 10,
            }}
          >
            {confirmed ? "Click again to confirm" : "Delete my account"}
          </button>
        </>
      )}
    </div>
  );
}
