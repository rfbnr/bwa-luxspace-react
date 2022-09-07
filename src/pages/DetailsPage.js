import React, { useEffect } from "react";
import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import ProductDetail from "parts/DetailsPage/ProductDetail";
import Suggestion from "parts/DetailsPage/Suggestion";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import useAsync from "helpers/hooks/useAsync";
import fetchData from "helpers/fetch/fetchData";
import { useParams } from "react-router-dom";
import LoadingProductDetail from "parts/DetailsPage/LoadingProductDetail";
import LoadingSuggestion from "parts/DetailsPage/LoadingSuggestion";

export default function DetailsPage() {
  const { idp } = useParams();

  const { data, run, isLoading } = useAsync();

  useEffect(() => {
    run(fetchData({ url: `/api/products/${idp}` }));
  }, [run, idp]);

  return (
    <>
      <Header theme="black" position="relative" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/1122", name: "Office Room" },
          { url: "/details/products/1133", name: "Details" },
        ]}
      />

      {isLoading ? <LoadingProductDetail /> : <ProductDetail data={data} />}

      {isLoading ? (
        <LoadingSuggestion />
      ) : (
        <Suggestion data={data?.relatedProducts || {}} />
      )}

      <Sitemap borderT={false} />
      <Footer />
    </>
  );
}
