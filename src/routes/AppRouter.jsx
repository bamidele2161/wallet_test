import React from "react";
import { Route, Routes } from "react-router-dom";
import UserRegistration from "../pages/Auth/Registration";
import SignIn from "../pages/Auth/signIn/SignIn";
import Dashboard from "../pages/dashboard";

const AppRouter = () => {
  return (
    <Routes>
      <Route index="/" element={<UserRegistration />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRouter;
