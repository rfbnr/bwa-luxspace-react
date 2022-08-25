import React from "react";
import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import ShoppingCart from "parts/CartPage/ShoppingCart";
import ShippingDetails from "parts/CartPage/ShippingDetails";

export default function CartPage() {
  return (
    <>
      <Header theme="black" position="relative" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <Sitemap borderT={false} />
      <Footer />
    </>
  );
}
