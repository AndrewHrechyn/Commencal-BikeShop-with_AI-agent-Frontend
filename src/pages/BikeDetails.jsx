import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import bikesData from "../assets/bikes/data_bikes";
import frameSize from "../assets/frames/sizes.png";

export default function BikeDetails() {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const bikeId = Number(id);
  const bike = bikesData.find((b) => b.id === bikeId && b.category === category);

  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    cardNumber: "",
    cvv: "",
    expiry: "",
  });

  if (!bike) {
    return <p>Байк не знайдено</p>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
  const orderData = {
    ...formData,
    bikeName: bike.name,
    price: bike.price,
    date: new Date().toLocaleString(),
  };

  const previousOrders = JSON.parse(localStorage.getItem("orders")) || [];
  localStorage.setItem("orders", JSON.stringify([...previousOrders, orderData]));

  alert("Замовлення оформлено!");
  setModalOpen(false);
  setFormData({
    name: "",
    email: "",
    phone: "",
    address: "",
    cardNumber: "",
    cvv: "",
    expiry: "",
  });
};

  const niceInput = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "1em",
};

const primaryBtn = {
  padding: "10px 20px",
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontSize: "1em",
  cursor: "pointer",
};

const secondaryBtn = {
  padding: "10px 20px",
  backgroundColor: "#ccc",
  color: "#000",
  border: "none",
  borderRadius: "6px",
  fontSize: "1em",
  cursor: "pointer",
};


  return (
    <div
      style={{
        padding: 20,
        maxWidth: 1000,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: 20,
          cursor: "pointer",
          padding: "8px 16px",
          borderRadius: 6,
          border: "none",
          backgroundColor: "#007BFF",
          color: "#fff",
          fontSize: "1em",
        }}
      >
        ← Back
      </button>

      <h2 style={{ fontSize: "2em", marginBottom: 20 }}>{bike.name}</h2>

      <img
        src={bike.image}
        alt={bike.name}
        style={{
          width: "100%",
          maxWidth: 800,
          borderRadius: 10,
          marginBottom: 25,
        }}
      />

      <p style={{ fontSize: "1.8em", fontWeight: "600", marginBottom: 10 }}>
        {bike.price}
      </p>

      <button
        onClick={() => setModalOpen(true)}
        style={{
          padding: "14px 28px",
          fontSize: "1.2em",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          marginBottom: 30,
        }}
      >
        Make purchase
      </button>

      <h2 style={{ fontSize: "2em", marginBottom: 10 }}>Description</h2>
      <p
        style={{
          fontSize: "1.2em",
          lineHeight: "1.6",
          maxWidth: "100%",
          whiteSpace: "pre-line",
          marginBottom: 30,
          textAlign: "left",
        }}
      >
        {bike.description}
      </p>

      {bike.technicalinfo && (
        <>
          <h2 style={{ fontSize: "2em", marginBottom: 10 }}>Technical Information</h2>
          <table
            style={{
              width: "100%",
              maxWidth: 800,
              borderCollapse: "collapse",
              textAlign: "left",
              fontSize: "1.1em",
              marginBottom: 30,
            }}
          >
            <tbody>
              {Object.entries(bike.technicalinfo).map(([key, value]) => (
                <tr key={key} style={{ borderBottom: "1px solid #ddd" }}>
                  <th
                    style={{
                      padding: "8px",
                      fontWeight: "600",
                      width: "40%",
                      verticalAlign: "top",
                    }}
                  >
                    {key}
                  </th>
                  <td style={{ padding: "8px" }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {bike.specs && (
        <>
          <h2 style={{ fontSize: "2em", marginBottom: 10 }}>Specifications</h2>
          <table
            style={{
              width: "100%",
              maxWidth: 800,
              borderCollapse: "collapse",
              textAlign: "left",
              fontSize: "1.1em",
              marginBottom: 30,
            }}
          >
            <tbody>
              {Object.entries(bike.specs).map(([key, value]) => (
                <tr key={key} style={{ borderBottom: "1px solid #ddd" }}>
                  <th
                    style={{
                      padding: "8px",
                      fontWeight: "600",
                      width: "40%",
                      verticalAlign: "top",
                    }}
                  >
                    {key}
                  </th>
                  <td style={{ padding: "8px" }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <h2 style={{ fontSize: "2em", marginBottom: 10 }}>Sizes</h2>
      <img
        src={frameSize}
        alt="Frame Size"
        style={{ width: "100%", maxWidth: 1000, borderRadius: 10 }}
      />

      {modalOpen && (
  <div
    style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    }}
  >
    <div
      style={{
        background: "#f9f9f9",
        padding: "30px 40px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        maxWidth: "400px",
        width: "90%",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Order form</h2>

      <input name="name" value={formData.name} onChange={handleChange} placeholder="Ім'я" style={niceInput} />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" style={niceInput} />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Телефон" style={niceInput} />
      <input name="address" value={formData.address} onChange={handleChange} placeholder="Адреса доставки" style={niceInput} />
      <input name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="Номер картки" style={niceInput} />
      <input name="cvv" value={formData.cvv} onChange={handleChange} placeholder="CVV" style={niceInput} />
      <input name="expiry" value={formData.expiry} onChange={handleChange} placeholder="Термін дії (MM/YY)" style={niceInput} />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        <button onClick={handleSubmit} style={primaryBtn}>Confirm</button>
        <button onClick={() => setModalOpen(false)} style={secondaryBtn}>Cancel</button>
      </div>
    </div>  
  </div>
)}
    </div>
  );
}

