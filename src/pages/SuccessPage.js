import React from "react";
import Header from "parts/Header";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import Success from "parts/Success";

export default function SuccessPage() {
  return (
    <>
      <Header theme="black" position="relative" />
      <Success />
      <Sitemap borderT={true} />
      <Footer />
    </>
  );
}
