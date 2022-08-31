import { Routes, Route } from "react-router-dom";
import "assets/css/app.css";
import HomePage from "pages/HomePage";
import DetailsPage from "pages/DetailsPage";
import CartPage from "pages/CartPage";
import SuccessOrderPage from "pages/SuccessOrderPage";
import NotFoundPage from "pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="categories/:idc/products/:id" element={<DetailsPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="success-order" element={<SuccessOrderPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
