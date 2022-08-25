import React from "react";
import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import ProductDetail from "parts/DetailsPage/ProductDetail";
import Suggestion from "parts/DetailsPage/Suggestion";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";

export default function DetailsPage() {
  return (
    <>
      <Header theme="black" position="relative" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/1122", name: "Office Room" },
          { url: "/categories/1122/products/1133", name: "Details" },
        ]}
      />
      <ProductDetail />
      <Suggestion />
      <Sitemap borderT={false} />
      <Footer />
    </>
  );
}
