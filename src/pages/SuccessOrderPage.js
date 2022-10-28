import React from "react";
import Header from "parts/Header";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import OrderSuccess from "parts/OrderSuccess";
import useScrollToTop from "helpers/hooks/useScrollToTop";

export default function SuccessOrderPage() {
  useScrollToTop();

  return (
    <>
      <Header theme="black" position="relative" />
      <OrderSuccess />
      <Sitemap borderT={true} />
      <Footer />
    </>
  );
}
