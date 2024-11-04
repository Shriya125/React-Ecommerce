import * as React from "react";
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/home';
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signupPage';
import CartPage from "./pages/cartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetailsPage from "./features/product/components/productDetails";

// React Router Dom 
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <CheckoutPage></CheckoutPage>,
  },
  {
    path: "/product-details",
    element: <ProductDetailsPage></ProductDetailsPage>,
  },
]);


function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      {/* <LoginPage></LoginPage> */}
      {/* <SignUpPage></SignUpPage> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
