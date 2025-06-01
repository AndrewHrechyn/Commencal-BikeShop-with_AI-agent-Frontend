import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import InfoPage from "./pages/InfoPage";
import ChangePassword from "./pages/ChangePassword";
import DeleteAccount from "./pages/DeleteAccount";

import ChatWidget from "./components/ChatWidget";
import CommencalMetaSXV5 from "./pages/CommencalMetaSXV5";
import CommencalTempo from "./pages/CommencalTempo";
import CommencalSupremeDHV5 from "./pages/CommencalSupremeDHV5";
import HowToBuy from "./pages/HowToBuy";
import Contacts from "./pages/Contacts";
// import RacingTeam from "./pages/RacingTeam";
import Account from "./pages/Account";

import NewArrivalsBikes from "./pages/NewArrivalsBikes";
import NewArrivalsEquipment from "./pages/NewArrivalsEquipment";

import Frames from "./pages/Frames";
import FrameDetails from "./pages/FrameDetails";

import Bikes from "./pages/Bikes";
import BikeDetails from "./pages/BikeDetails";




// import Bikes from "./pages/Bikes";
// import Enduro from "./pages/Enduro";
// import DH from "./pages/DH";
// import Gravel from "./pages/Gravel";
// import Trail from "./pages/Trail";
// import Ebike from "./pages/Ebike";

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

          <Route path="/account" element={<Account />} />

          <Route path="/account" element={<Account />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/delete-account" element={<DeleteAccount />} />

          <Route path="/new-arrivals/new-bikes" element={<NewArrivalsBikes />} />
          <Route path="/new-arrivals/new-equipment" element={<NewArrivalsEquipment />} />

          <Route path="/frames" element={<Frames />} /> 
          <Route path="/frames/:id" element={<FrameDetails />} />

          <Route path="/bikes" element={<Bikes />} />

          <Route path="/bikes/:category?" element={<Bikes />} />

          <Route path="/bikes/:category/:id" element={<BikeDetails />} />


          {/* <Route path="/frames" element={<Frames />} />
          <Route path="/products/aluminum" element={<Aluminum />} />
          <Route path="/products/carbon" element={<Carbon />} />
          <Route path="/products/steel" element={<Steel />} />
          <Route path="/products/titanium" element={<Titanium />} /> */}


          {/* <Route path="/bikes" element={<Bikes />} />
          <Route path="/bikes/enduro" element={<Enduro />} />
          <Route path="/bikes/dh" element={<DH />} />
          <Route path="/bikes/gravel" element={<Gravel />} />
          <Route path="/bikes/trail" element={<Trail />} />
          <Route path="/bikes/ebike" element={<Ebike />} /> */}




          {/* <Route path="/racing-team" element={<RacingTeam />} /> */}

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
