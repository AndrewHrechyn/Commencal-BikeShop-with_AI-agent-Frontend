import React, { useEffect, useState } from "react";
import image1 from "../assets/image.png";
import image2 from "../assets/image1.png";
import image3 from "../assets/image2.png";
import { FaArrowDown } from "react-icons/fa";


import { Link } from "react-router-dom";

const images = [image1, image2, image3];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <img
        key={index}
        src={images[index]}
        alt="bike"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",      
          alignItems: "center",     
          width: "100%",
        }}
      >
        <Link
        to="/commencal-meta-sx-v5"
        style={{
            display: "block",
            marginBottom: "20px",
            fontSize: "24px",
            width: "100%",
            textAlign: "center",
            fontWeight: "bold",
            backgroundColor: "black",
            color: "white",
            height: "60px",
            lineHeight: "60px",
            borderRadius: "4px",
            textDecoration: "none",
            cursor: "pointer",
        }}
        >
        <FaArrowDown />
        Check our new Commencal Meta SX V5
        <FaArrowDown />
        </Link>
      <iframe
            width="1500"
            height="750"
            src="https://www.youtube.com/embed/s9n6JicM4SY"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ marginBottom: "20px" }}
      ></iframe>
        

      </div>
    </div>
  );
}
