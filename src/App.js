import AuthContext from "./contexts/AuthContext";
import UserContext from "./contexts/UserContext";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";

export default function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/products" element={<HomePage />} />
            <Route
              path="/cart"
              element={<CartPage cart={cart} setCart={setCart} />}
            />
            <Route
              path="/product/:id"
              element={
                <ProductPage
                  cart={cart}
                  setCart={setCart}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}
