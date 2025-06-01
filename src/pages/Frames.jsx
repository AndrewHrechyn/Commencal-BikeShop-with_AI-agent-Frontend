import React from "react";
import { useNavigate } from "react-router-dom";  
import framesData from "../assets/frames/data_frames";
import framesImage from "../assets/commencal_frames.png";

export default function Frames() {
  const navigate = useNavigate();  

  return (
    <div style={{ padding: 0 }}>
      <div style={{ marginLeft: "-20px", marginRight: "-20px" }}>
        <img
          src={framesImage}
          alt="Header"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", 
          gap: 30,
          padding: 30,
          justifyItems: "center",
        }}
      >
        {framesData.map((frame) => (
          <div
            key={frame.id}
            style={{
              width: "100%",
              maxWidth: 500, 
              border: "1px solid #ccc",
              borderRadius: 10,
              padding: 20, 
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={frame.image}
              alt={frame.name}
              style={{
                width: "100%",
                height: 320, 
                objectFit: "cover",
                borderRadius: 8,
                marginBottom: 15,
              }}
            />
            <h3 style={{ margin: "15px 0", fontSize: "1.3em" }}>{frame.name}</h3>
            <p style={{ marginBottom: 15, fontSize: "1em" }}>{frame.price}</p>
            <button
              onClick={() => navigate(`/frames/${frame.id}`)}  
              style={{
                padding: "10px 16px",
                cursor: "pointer",
                borderRadius: 6,
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                fontSize: "1em",
              }}
            >
              More details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
