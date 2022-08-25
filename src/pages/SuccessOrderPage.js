import React from "react";
import Header from "parts/Header";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import OrderSuccess from "parts/OrderSuccess";

export default function SuccessOrderPage() {
  return (
    <>
      <Header theme="black" position="relative" />
      <OrderSuccess />
      <Sitemap borderT={true} />
      <Footer />
    </>
  );
}
