import React, { useState } from "react";
import headerImage from "../assets/login.png";

import { useNavigate } from "react-router-dom";



export default function Account() {
const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }
    setUser({
      name,
      email,
      joined: new Date().toLocaleDateString(),
      orders: 0,
      address: "",
    });
    setName("");
    setEmail("");
    setPassword("");
    setMessage("");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textTransform: "uppercase" }}>
      <img
        src={headerImage}
        alt="Header"
        style={{
          width: "100vw",
          height: "300px",
          objectFit: "cover",
          display: "block",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
        }}
      />

      <div style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
        {user ? (
          <>
            <h1 style={{ fontSize: "2rem", marginBottom: 20 }}>👤 My Account</h1>

            <section style={{ marginBottom: 30 }}>
              <h2 style={{ fontSize: "1.5rem", borderBottom: "1px solid #ccc", paddingBottom: 5 }}>
                Profile Information
              </h2>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Member since:</strong> {user.joined}</p>
            </section>

            <section style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: "1.5rem", borderBottom: "1px solid #ccc", paddingBottom: 5 }}>My Orders</h2>
            <p>You have placed <strong>{user.orders}</strong> orders.</p>
            <button
                style={{ padding: "8px 16px", marginTop: 10, cursor: "pointer" }}
                onClick={() => navigate("/cart")}
            >
                View Order History
            </button>
            </section>

            <section style={{ marginBottom: 30 }}>
              <h2 style={{ fontSize: "1.5rem", borderBottom: "1px solid #ccc", paddingBottom: 5 }}>Shipping Address</h2>
              <p>{user.address || "No address provided."}</p>
              <button style={{ padding: "8px 16px", marginTop: 10, cursor: "pointer" }}>Edit Address</button>
            </section>

            <section>
              <h2 style={{ fontSize: "1.5rem", borderBottom: "1px solid #ccc", paddingBottom: 5 }}>Account Settings</h2>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li>    <a href="/change-password">🔒 Change Password</a></li>
                <li><a href="/delete-account" style={{ color: "red" }}>🗑️ Delete Account</a></li>
                <li><a href="/logout">🚪 Logout</a></li>
              </ul>
            </section>
          </>
        ) : (
          <>
            <h1 style={{ fontSize: "30px", padding: "10px" }}>📝 Register</h1>
            <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: 15, fontSize: "5rem" }}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ fontSize: "20px", padding: "10px" }}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ fontSize: "20px", padding: "10px" }}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ fontSize: "20px", padding: "10px" }}
              />
              <button type="submit" style={{ padding: 10, cursor: "pointer", fontSize: "20px" }}>Register</button>
            </form>
            {message && <p style={{ color: "red", marginTop: 10 }}>{message}</p>}
          </>
        )}
      </div>
    </div>
  );
}
