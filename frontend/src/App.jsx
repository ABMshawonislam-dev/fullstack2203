import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from "./pages/Registration";
import OtpVarification from "./pages/OtpVarification";
import Login from "./pages/Login";
import ForgotPass from "./pages/ForgotPass";
import ChangePass from "./pages/ChangePass";
import Home from "./pages/Home";
import Category from "./pages/Category";
import SubCategory from "./pages/SubCategory";
import ViewCat from "./pages/ViewCat";
import AddProduct from "./pages/AddProduct";
import ViewProduct from "./pages/ViewProduct";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Registration />}></Route>
        <Route
          path="/otpvarification/:email/:otp"
          element={<OtpVarification />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotpass" element={<ForgotPass />}></Route>
        <Route path="/changepass/:token" element={<ChangePass />}></Route>
        <Route path="/dashboard" element={<Home />}>
          <Route path="createcat" element={<Category />}></Route>
          <Route path="createsubcat" element={<SubCategory />}></Route>
          <Route path="viewcat" element={<ViewCat />}></Route>
          <Route path="addproduct" element={<AddProduct />}></Route>
          <Route path="viewproduct" element={<ViewProduct />}></Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
