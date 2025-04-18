import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

// Import the layouts
import RootLayout from './layouts/root-layout';
import AboutLayout from './layouts/about-layout.tsx';
import RegisterLayout from './layouts/register-layout.tsx';
import ProductsLayout from './layouts/products-layout.tsx';

// Import the components
import Home from './pages/Home.tsx';
import About from './pages/About/About.tsx';
import PlantRegistration from './pages/PlantRegistration.tsx';
import AllProducts from './pages/AllProducts.tsx';
import ProductPage from './pages/Product/[id].tsx';
import NotFound from './pages/NotFound.tsx'

import { SignIn } from '@clerk/clerk-react';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/sign-in',
        element: (
          <div className="flex justify-center items-center h-screen">
            <SignIn appearance={{
              elements: { formButtonPrimary: "bg-bgFooter hover:bg-bgFooter", },
            }} />
          </div>
        )
      },
      {
        element: <AboutLayout />,
        children: [
          { path: '/about', element: <About /> },
        ]
      },
      {
        element: <RegisterLayout />,
        children: [
          { path: '/plant-registration', element: <PlantRegistration /> },
        ]
      },
      {
        element: <ProductsLayout />,
        children: [
          { path: '/all-products', element: <AllProducts /> },
        ]
      },
      {
        element: <ProductsLayout />,
        children: [
          { path: '/product/:id', element: <ProductPage /> },
        ]
      },
      {
        element: <ProductsLayout />,
        children: [
          { path: '/*', element: <NotFound /> },
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);