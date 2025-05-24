import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import { FaQuestionCircle } from "react-icons/fa";

export default function Header() {
    const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "900",  
    fontSize: "20px",
    fontFamily: "Arial, sans-serif",
  };
  return (
    <header style={{ backgroundColor: "black", padding: "10px" }}>
      <div style={{ marginBottom: "10px" }}>
        <Link
          to="/"
          style={{color: "white", textDecoration: "none", fontWeight: "900", fontSize: "40px", fontFamily: "'Russo One', sans-serif"  }}
        >
          Commencal
        </Link>
      </div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/bikes" style={linkStyle}>
            Bikes
          </Link>
          <Link to="/products" style={linkStyle}>
            Frames
          </Link>
          <Link to="/products" style={linkStyle}>
            Components
          </Link>
          <Link to="/products" style={linkStyle}>
            Clothes
          </Link>
          <Link to="/info" style={linkStyle}>
            Info
          </Link>
          <Link to="/contacts" style={linkStyle}>
            Contacts
          </Link>

        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/cart" style={linkStyle}>
            <FaShoppingCart />
          </Link>
          <Link to="/sale-locations" style={linkStyle}>
            <FaQuestionCircle /> 
          </Link>
          <Link to="/account" style={linkStyle}>
            <FaUser size={24} color="white" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
