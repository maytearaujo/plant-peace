import { Routes as RouterRoutes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product/[id]";
import About from "../pages/About/About";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default AppRoutes;