import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart, FaQuestionCircle } from "react-icons/fa";

import "../styles/Header.css";

// export default function Header() {
//     const linkStyle = {
//     color: "white",
//     textDecoration: "none",
//     fontWeight: "900",  
//     fontSize: "20px",
//     fontFamily: "Arial, sans-serif",
//   };
//   return (
//     <header style={{ backgroundColor: "black", padding: "10px" }}>
//       <div style={{ marginBottom: "10px" }}>
//         <Link
//           to="/"
//           style={{color: "white", textDecoration: "none", fontWeight: "900", fontSize: "40px", fontFamily: "'Russo One', sans-serif"  }}
//         >
//           Commencal
//         </Link>
//       </div>
//       <nav
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           gap: "20px",
//         }}
//       >
//         <div style={{ display: "flex", gap: "20px" }}>
//           <Link to="/bikes" style={linkStyle}>
//             Bikes
//           </Link>
//           <Link to="/products" style={linkStyle}>
//             Frames
//           </Link>
//           <Link to="/products" style={linkStyle}>
//             Components
//           </Link>
//           <Link to="/products" style={linkStyle}>
//             Clothes
//           </Link>
//           <Link to="/info" style={linkStyle}>
//             Info
//           </Link>
//           <Link to="/contacts" style={linkStyle}>
//             Contacts
//           </Link>

//         </div>
//         <div style={{ display: "flex", gap: "20px" }}>
//           <Link to="/cart" style={linkStyle}>
//             <FaShoppingCart />
//           </Link>
//           <Link to="/sale-locations" style={linkStyle}>
//             <FaQuestionCircle /> 
//           </Link>
//           <Link to="/account" style={linkStyle}>
//             <FaUser size={24} color="white" />
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// }

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
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "900",
            fontSize: "40px",
            fontFamily: "'Russo One', sans-serif",
          }}
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
        <div style={{ display: "flex", gap: "30px" }}>
            <div className="nav-item-with-dropdown" style={{ position: "relative" }}>
                <Link to="/new-arrivals" style={linkStyle}>New Arrivals</Link>
                <div className="dropdown-menu">
                    <Link to="/new-arrivals/new-bikes" style={linkStyle}>New Bikes</Link>
                    <Link to="/new-arrivals/new-equipment" style={linkStyle}>New Equipment</Link>
                </div>
            </div>
        
            <div className="nav-item-with-dropdown" style={{ position: "relative" }}>
                <Link to="/bikes" style={linkStyle}>Bikes</Link>
                <div className="dropdown-menu">
                    <Link to="/bikes/enduro" style={linkStyle}>Enduro</Link>
                    <Link to="/bikes/dh" style={linkStyle}>DH</Link>
                    <Link to="/bikes/gravel" style={linkStyle}>Gravel</Link>
                    <Link to="/bikes/trail" style={linkStyle}>Trail</Link>
                    <Link to="/bikes/ebike" style={linkStyle}>Ebike</Link>
                </div>
            </div>
        
            <div className="nav-item-with-dropdown" style={{ position: "relative" }}>
                <Link to="/frames" style={linkStyle}>Frames</Link>
                <div className="dropdown-menu">
                    <Link to="/products/aluminum" style={linkStyle}>Aluminum</Link>
                    <Link to="/products/carbon" style={linkStyle}>Carbon</Link>
                    <Link to="/products/steel" style={linkStyle}>Steel</Link>
                    <Link to="/products/titanium" style={linkStyle}>Titanium</Link>
                </div>
            </div>

        <div className="nav-item-with-dropdown" style={{ position: "relative" }}>
                <Link to="/components" style={linkStyle}>Components</Link>
                <div className="dropdown-menu">
                    <Link to="/components/tires" style={linkStyle}>Tires</Link>
                    <Link to="/components/wheels" style={linkStyle}>Wheels</Link>
                    <Link to="/components/brakes" style={linkStyle}>Brakes</Link>
                    <Link to="/components/forks" style={linkStyle}>Forks</Link>
                    <Link to="/components/handlebars" style={linkStyle}>Handlebars</Link>
                </div>
            </div>
        <div className="nav-item-with-dropdown" style={{ position: "relative" }}>
                <Link to="/clothes" style={linkStyle}>Components</Link>
                <div className="dropdown-menu">
                    <Link to="/clothes/t-shirts" style={linkStyle}>T-shirts</Link>
                    <Link to="/clothes/pants" style={linkStyle}>Pants</Link>
                    <Link to="/components/helmets" style={linkStyle}>Helmets</Link>
                    <Link to="/components/gloves" style={linkStyle}>Gloves</Link>
                    <Link to="/components/boots" style={linkStyle}>Boots</Link>
                </div>
            </div>
        <Link to="/racing-team" style={linkStyle}>
            Racing Team 
        </Link>
        <Link to="/info" style={linkStyle}>
            Info
        </Link>
        <Link to="/contacts" style={linkStyle}>
            Contacts
        </Link>
        </div>
        <div className="icon-links" style={{ display: "flex", gap: "40px" }}>
          <Link to="/cart" className="icon-link" style={linkStyle}>
            <FaShoppingCart />
          </Link>
          <Link to="/sale-locations" className="icon-link" style={linkStyle}>
            <FaQuestionCircle />
          </Link>
          <Link to="/account" className="icon-link" style={linkStyle}>
            <FaUser size={24} color="white" />
          </Link>
        </div>
      </nav>
    </header>
  );
}