import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SubscribeSection from "./SubscribeSection";
import { useLocation } from "react-router-dom";

const Layout = ({ pages }) => {
  const location = useLocation();
  return (
    <div className="overflow-x-hidden">
      {location?.pathname !== "/" && <Navbar />}
      <div className="w-full bg-gray-50">{pages}</div>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Layout;
