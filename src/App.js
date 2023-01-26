import AuthContext from "./contexts/AuthContext";
import UserContext from "./contexts/UserContext";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";

export default function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

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
            <Route path="/sign-in" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}
