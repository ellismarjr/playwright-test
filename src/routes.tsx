import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./modules/products";
import { SignIn } from "./modules/signin";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}
