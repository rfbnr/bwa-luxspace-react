import { Routes, Route } from "react-router-dom";
import "assets/css/app.css";
import HomePage from "pages/HomePage";
import DetailsPage from "pages/DetailsPage";
import CartPage from "pages/CartPage";
import SuccessOrderPage from "pages/SuccessOrderPage";
import NotFoundPage from "pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="details/products/:idp" element={<DetailsPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="success-order" element={<SuccessOrderPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
