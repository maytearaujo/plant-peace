import { Routes as RouterRoutes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product/[id]";
import PlantRegistration from "../pages/PlantRegistration";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound";
import AllProducts from "../pages/AllProducts";
import { useEffect, useState } from "react";

const AppRoutes = () => {

  const location = useLocation()

  const [path, setPath] = useState<string>('');

  useEffect(() => {
    setPath(location.pathname);
    window.scrollTo(0, 0);
  }, [path, location.pathname])

  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/plant-registration" element={<PlantRegistration />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default AppRoutes;