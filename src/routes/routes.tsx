import { Routes as RouterRoutes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product/[id]";
import PlantRegistration from "../pages/PlantRegistration";
import About from "../pages/About/About";
import NotFound from "../components/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/plant-registration" element={<PlantRegistration />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default AppRoutes;