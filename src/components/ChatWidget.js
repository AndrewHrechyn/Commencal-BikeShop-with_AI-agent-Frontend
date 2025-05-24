import React, { useState } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { from: "user", text: input }]);
      setInput("");
      // Пізніше: надсилання повідомлення WebSocket
    }
  };

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: isOpen ? "500px" : "90px",
      height: isOpen ? "600px" : "90px",
      backgroundColor: "#333",
      color: "white",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      overflow: "hidden",
      transition: "0.3s",
      zIndex: 9999,
    }}>
      {isOpen ? (
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <div
            style={{
              padding: "10px",
              backgroundColor: "#222",
              borderBottom: "1px solid #555",
              cursor: "pointer",
              fontWeight: "bold"
            }}
            onClick={() => setIsOpen(false)}
          >
            🗙 ChatBot
          </div>
          <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ marginBottom: "5px", textAlign: msg.from === "user" ? "right" : "left" }}>
                <span>{msg.text}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", padding: "10px", borderTop: "1px solid #555" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ flex: 1, marginRight: "5px", padding: "5px" }}
              placeholder="Type a message..."
            />
            <button onClick={handleSend} style={{ padding: "5px 10px" }}>Send</button>
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            cursor: "pointer"
          }}
          onClick={() => setIsOpen(true)}
        >
          💬
        </div>
      )}
    </div>
  );
}
