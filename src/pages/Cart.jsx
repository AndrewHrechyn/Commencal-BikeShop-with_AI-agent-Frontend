import { Frame } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Cart() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h2>Purchase History</h2>

      {orders.length === 0 ? (
        <p>No orders have been placed yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {orders.map((order, index) => (
            <li
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                marginBottom: "12px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <p><strong>Product:</strong> {order.bikeName || "FRAME " + order.frameName || "Unknown product"}</p>
              <p><strong>Price:</strong> {order.price}</p>
              <p><strong>Name:</strong> {order.name}</p>
              <p><strong>Email:</strong> {order.email}</p>
              <p><strong>Phone Number:</strong> {order.phone}</p>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Data:</strong> {order.date}</p>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() => {
          localStorage.removeItem("orders");
          setOrders([]);
        }}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Delete History
      </button>
    </div>
  );
}
