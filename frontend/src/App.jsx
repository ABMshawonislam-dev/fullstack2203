import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Registration from "./pages/Registration";
import OtpVarification from "./pages/OtpVarification";
import Login from "./pages/Login";
import ForgotPass from "./pages/ForgotPass";
import ChangePass from "./pages/ChangePass";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
        path="/"
        element={<Registration />}
      ></Route>
        <Route
        path="/otpvarification/:email/:otp"
        element={<OtpVarification />}
      ></Route>
        <Route
        path="/login"
        element={<Login />}
      ></Route>
      <Route
        path="/forgotpass"
        element={<ForgotPass />}
      ></Route>
      <Route
        path="/changepass/:token"
        element={<ChangePass />}
      ></Route>
      </Route>
    )
  );


  
  return (
   
    <RouterProvider router={router} />
  );
}

export default App;
