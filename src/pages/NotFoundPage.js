import React from "react";
import Header from "parts/Header";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import NotFoundMessage from "parts/NotFoundMessage";
import useScrollToTop from "helpers/hooks/useScrollToTop";

export default function SuccessPage() {
  useScrollToTop();

  return (
    <>
      <Header theme="black" position="relative" />
      <NotFoundMessage />
      <Sitemap borderT={true} />
      <Footer />
    </>
  );
}
