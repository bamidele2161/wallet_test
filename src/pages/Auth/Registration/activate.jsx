import React from "react";
import { Body, Form, Registration } from "../Registration/styles";

import InputWithLabel from "../../../components/primaryInput/inputWithLabel";
import Button from "../../../components/button";
import AuthLayout from "../../../layout/AuthLayout";
import { activateSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useActivateUserMutation } from "../../../services/auth";
import toast from "react-hot-toast";
import { saveUserInfo } from "../../../store/slice";
import { store } from "../../../store/store";

const ActivationCode = () => {
  const [activateUser, userState] = useActivateUserMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(activateSchema),
  });

  const submitForm = async (formData) => {
    try {
      const requiredData = {
        ...formData,
        emailAddress: state?.email,
      };

      const response = await activateUser(requiredData);

      if (response?.data?.statusCode === 200) {
        store.dispatch(saveUserInfo(response?.data));
        localStorage.setItem("userInfo", JSON.stringify(response?.data));
        toast.success(response?.data?.message);
        navigate("/login");
      }
      if (response?.data?.statusCode === 250) {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayout>
      <Registration>
        <h1>Activate</h1>
        <Form onSubmit={handleSubmit(submitForm)}>
          <Body>
            <div>
              <InputWithLabel
                placeholder="Enter code"
                label="Code"
                type="text"
                name="activationCode"
                register={register}
                errorMessage={errors.activationCode?.message}
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

export default ActivationCode;
