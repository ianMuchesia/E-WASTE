import React from "react";
import Header from "./components/Header";
import Body from "./pages/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RepairShop from "./pages/RepairShop";
import SpareParts from "./pages/SpareParts";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Create from "./Create/Create";
import SingleShop from "./pages/SingleShop";
import Customer from "./pages/Customer";
import Images from "./pages/Images";

const App = () => {
 
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="RepairShop" element={<RepairShop />} />
        <Route path="RepairShop/:RepairShopId" element={<SingleShop />} />
        <Route path="SpareParts" element={<SpareParts />} />
        
        <Route path="Contact" element={<Contact />} />
        <Route path="Login" element={<Login />} />
        <Route path="Create" element={<Create />} />
        <Route path="Customer" element={<Customer />} />
        <Route path="Images" element={<Images />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
