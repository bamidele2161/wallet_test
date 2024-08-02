import React from "react";
import {
  Body,
  Form,
  Registration,
} from "../Registration/styles";

import InputWithLabel from "../../../components/primaryInput/inputWithLabel";
import Button from "../../../components/button";
import AuthLayout from "../../../layout/AuthLayout";
import { loginSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthenticateUserMutation } from "../../../services/auth";
import toast from "react-hot-toast";
import { saveUserInfo } from "../../../store/slice";
import { store } from "../../../store/store";

const SignIn = () => {
  const [authenticateUser, userState] = useAuthenticateUserMutation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitForm = async (formData) => {
    try {
      const response = await authenticateUser(formData);
      if (response?.data?.statusCode === 200) {
        store.dispatch(saveUserInfo(response?.data));
        localStorage.setItem("userInfo", JSON.stringify(response?.data));
        toast.success("Login successful");
        navigate("/dashboard");
      }
      if (response?.error?.status === 401) {
        toast.error(response?.error?.data?.errorMessage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayout>
      <Registration>
        <h1>Sign In</h1>
        <Form onSubmit={handleSubmit(submitForm)}>
          <Body>
            <div>
              <InputWithLabel
                placeholder="Enter your email address"
                label="Email"
                type="email"
                name="emailAddress"
                register={register}
                errorMessage={errors.emailAddress?.message}
              />
              <InputWithLabel
                placeholder="Min. of 6 characters"
                label="Password"
                type="password"
                rightText
                name="password"
                register={register}
                errorMessage={errors.password?.message}
              />
            </div>

            <Button
              title="Sign In"
              type="submit"
              loading={userState.isLoading}
            />
          </Body>
        </Form>
      </Registration>
    </AuthLayout>
  );
};

export default SignIn;
