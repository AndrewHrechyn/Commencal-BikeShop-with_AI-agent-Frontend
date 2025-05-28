import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import InfoPage from "./pages/InfoPage";

import ChatWidget from "./components/ChatWidget";
import CommencalMetaSXV5 from "./pages/CommencalMetaSXV5";
import CommencalTempo from "./pages/CommencalTempo";
import CommencalSupremeDHV5 from "./pages/CommencalSupremeDHV5";
import HowToBuy from "./pages/HowToBuy";
import Contacts from "./pages/Contacts";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contacts" element={<Contacts />} />

          <Route path="/commencal-meta-sx-v5" element={<CommencalMetaSXV5 />} />
          <Route path="/commencal-tempo" element={<CommencalTempo />} />
          <Route path="/commencal-supreme-dh-v5" element={<CommencalSupremeDHV5 />} />
          <Route path="/sale-locations" element={<HowToBuy />} />

        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
