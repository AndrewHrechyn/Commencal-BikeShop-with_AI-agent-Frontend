import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react";

export default function ContactPage() {
  return (
    <div
      style={{
        backgroundColor: "#f7f7f7",
        minHeight: "100vh",
        padding: "3rem 1.5rem",
        fontFamily: "'Arial', sans-serif",
        color: "#333",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          maxWidth: 600,
          width: "100%",
          borderRadius: 24,
          padding: "3rem 3rem 4rem",
          boxShadow:
            "0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.05)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3.2rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            color: "#222",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.6,
            color: "#555",
            marginBottom: "3rem",
          }}
        >
          Have questions about our bikes, orders, or support? Feel free to reach
          out through any of the methods below. We're here to help you ride!
        </p>

        {/* Section Template */}
        {[
          {
            icon: <MapPin style={{ width: 28, height: 28, color: "#4a5568" }} />,
            title: "Our Address",
            content: (
              <>
                COMMENCAL Bike Store<br />
                123 Mountain Trail Road<br />
                Whistler, BC V0N 1B4<br />
                Canada
              </>
            ),
          },
          {
            icon: <Phone style={{ width: 28, height: 28, color: "#4a5568" }} />,
            title: "Phone",
            content: (
              <>
                +1 (604) 123-4567<br />
                +1 (800) 987-6543
              </>
            ),
          },
          {
            icon: <Mail style={{ width: 28, height: 28, color: "#4a5568" }} />,
            title: "Email",
            content: (
              <a
                href="mailto:support@commencal.com"
                style={{
                  color: "#3182ce",
                  fontWeight: "600",
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
                onMouseEnter={e => (e.target.style.textDecoration = "underline")}
                onMouseLeave={e => (e.target.style.textDecoration = "none")}
              >
                support@commencal.com
              </a>
            ),
          },
          {
            icon: <Clock style={{ width: 28, height: 28, color: "#4a5568" }} />,
            title: "Business Hours",
            content: (
              <>
                Monday – Friday: 9:00 AM – 6:00 PM<br />
                Saturday: 10:00 AM – 4:00 PM<br />
                Sunday: Closed
              </>
            ),
          },
        ].map(({ icon, title, content }) => (
          <section
            key={title}
            style={{
              marginBottom: "2.5rem",
              textAlign: "left",
              paddingLeft: "3.5rem",
              position: "relative",
            }}
          >
            <h2
              style={{
                fontSize: "1.8rem",
                fontWeight: "600",
                color: "#2d3748",
                marginBottom: "0.6rem",
                display: "flex",
                alignItems: "center",
                gap: "0.7rem",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                {icon}
              </span>
              {title}
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: 1.5 }}>
              {content}
            </p>
          </section>
        ))}

        <section style={{ marginBottom: "3rem", textAlign: "left" }}>
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: "600",
              marginBottom: "1rem",
              color: "#2d3748",
              textTransform: "uppercase",
            }}
          >
            Follow Us
          </h2>
          <div style={{ display: "flex", gap: "2rem" }}>
            <a
              href="https://www.facebook.com/COMMENCALbicycles"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#4a5568",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#3182ce")}
              onMouseLeave={e => (e.currentTarget.style.color = "#4a5568")}
              aria-label="Facebook"
            >
              <Facebook style={{ width: 32, height: 32 }} />
            </a>
            <a
              href="https://www.instagram.com/commencalbikes"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#4a5568",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#d53f8c")}
              onMouseLeave={e => (e.currentTarget.style.color = "#4a5568")}
              aria-label="Instagram"
            >
              <Instagram style={{ width: 32, height: 32 }} />
            </a>
            <a
              href="https://www.youtube.com/user/COMMENCALbicycles"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#4a5568",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#e53e3e")}
              onMouseLeave={e => (e.currentTarget.style.color = "#4a5568")}
              aria-label="YouTube"
            >
              <Youtube style={{ width: 32, height: 32 }} />
            </a>
          </div>
        </section>

        <div style={{ textAlign: "center" }}>
          <a
            href="https://maps.google.com/?q=Commencal+Bike+Store+Whistler"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "0.8rem 2rem",
              backgroundColor: "#3182ce",
              color: "white",
              borderRadius: 12,
              fontWeight: "600",
              fontSize: "1.1rem",
              textDecoration: "none",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#2b6cb0")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#3182ce")}
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
