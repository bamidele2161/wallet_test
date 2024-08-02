import React from "react";
import { Route, Routes } from "react-router-dom";
import UserRegistration from "../pages/Auth/Registration";
import SignIn from "../pages/Auth/signIn/SignIn";
import Dashboard from "../pages/dashboard";
import { useSelector } from "react-redux";
import RouteProtector from "./Protected";

const AppRouter = () => {
  const userInfo = useSelector((state) => state.UserDataReducer?.userInfo);

  return (
    <Routes>
      <Route index="/" element={<UserRegistration />} />
      <Route path="/login" element={<SignIn />} />
      <Route
        path="/dashboard"
        element={
          <RouteProtector isVerified={userInfo}>
            {" "}
            <Dashboard />
          </RouteProtector>
        }
      />
    </Routes>
  );
};

export default AppRouter;
