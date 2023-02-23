import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-[50px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
