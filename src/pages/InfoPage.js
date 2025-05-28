import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function InfoPage() {
  const position = [49.8397, 24.0297];
  return (
    <div style={{ padding: "20px"  }}>
      <h1>Where you can find us?</h1>
      <p>Are you interested in our bikes, skis or clothing? Here is a list of our main physical points of sale. To buy online, please note that we have 8 storage locations around the world and therefore, 8 different websites. Do not hesitate to consult them whatever country you live in.</p>
      <h1>HOW TO BUY?</h1>
      <h2>ONLINE PURCHASE</h2>
      <p>You choose your product, you place an order, you pay, and you receive your package. A question ? Contact us.</p>
      <h2>PURCHASE IN STORE</h2>
      <p>All bike & ski shops in the world can order the COMMENCAL product of your choice. All they need to do is contact our B2B SERVICE (professional sales service) and place an order. The merchant receives the product in his store and can deliver it to you. You pay directly to the store. The product will be delivered and paid for at the store.</p>
      <h2>AFTER SALES SERVICE</h2>
      <p>If you encounter a difficulty or after-sales or warranty problem, whether you purchased your bike directly or through a store, you benefit from COMMENCAL CARE to obtain help. After analysis by our team, a shop of your choice may even intervene at our expense.</p>
      <h1>WHERE TO BUY?</h1>
      <p></p>
      <h1>Distributors</h1>
      <p>You can find us in Lviv city in the following store</p>
      <div style={{ height: "600px", marginTop: "10px" }}>
        <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Наш магазин у Львові <br /> Завітайте до нас!
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
