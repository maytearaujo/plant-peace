import { Routes as RouterRoutes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default AppRoutes;