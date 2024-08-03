import React from "react";
import { Body, DoubleGridWrapper, Form, Registration } from "./styles";
import InputWithLabel from "../../../components/primaryInput/inputWithLabel";
import Button from "../../../components/button";
import AuthLayout from "../../../layout/AuthLayout";
import { userRegistrationSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  useGetAllRolesQuery,
  useRegisterUserMutation,
} from "../../../services/auth";
import toast from "react-hot-toast";
import DropDown from "../../../components/primaryInput/dropDown";

const UserRegistration = () => {
  const [registerNewUser, userState] = useRegisterUserMutation();
  const { data } = useGetAllRolesQuery();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegistrationSchema),
  });

  const roleList = data?.data?.map((role) => ({
    value: role?.roleID,
    label: role?.roleName,
  }));

  const handleRoleChange = (value) => {
    let selectedRole = Object.values(value)[0];
    setValue("role", selectedRole, { shouldValidate: true });
  };

  const submitForm = async (formData) => {
    try {
      const response = await registerNewUser(formData);

      if (response?.data?.statusCode === 200) {
        toast.success(response?.data?.message);
        navigate("/activate", { state: { email: formData?.emailaddress } });
      }
      if (response?.error?.status === 400) {
        toast.error(response?.error?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayout
      register={true}
      linkText="Sign In"
      link="/login"
      question="Already have an account?"
    >
      <Registration>
        <h1>Sign Up</h1>
        <Form onSubmit={handleSubmit(submitForm)}>
          <Body>
            <div>
              <DoubleGridWrapper>
                <InputWithLabel
                  placeholder="Enter your first name"
                  label="First name"
                  type="text"
                  name="firstname"
                  register={register}
                  errorMessage={errors.firstname?.message}
                />
                <InputWithLabel
                  placeholder="Enter your last name"
                  label="Last name"
                  type="text"
                  name="lastname"
                  register={register}
                  errorMessage={errors.lastname?.message}
                />
              </DoubleGridWrapper>
              <DoubleGridWrapper>
                <InputWithLabel
                  placeholder="Enter your middle name"
                  label="Middle name"
                  type="text"
                  name="middlename"
                  register={register}
                  errorMessage={errors.middlename?.message}
                />
                <InputWithLabel
                  placeholder="Enter your phone number"
                  label="Phone number"
                  type="text"
                  name="phonenumber"
                  register={register}
                  errorMessage={errors.phonenumber?.message}
                />
              </DoubleGridWrapper>

              <InputWithLabel
                placeholder="Enter your email address"
                label="Email"
                type="email"
                name="emailaddress"
                register={register}
                errorMessage={errors.emailaddress?.message}
              />
              <DoubleGridWrapper>
                <InputWithLabel
                  placeholder="Min. of 6 characters"
                  label="Password"
                  type="password"
                  rightText
                  name="password"
                  register={register}
                  errorMessage={errors.password?.message}
                />
                <DropDown
                  containerStyle={{ margin: 0, marginBottom: "24px" }}
                  label="Role"
                  labelStyle="input-label"
                  options={roleList}
                  onChange={handleRoleChange}
                  errorMessage={errors.role?.message}
                  placeholder="Select Role"
                />
              </DoubleGridWrapper>
            </div>

            <Button
              title="Sign Up"
              type="submit"
              loading={userState.isLoading}
            />
          </Body>
        </Form>
      </Registration>
    </AuthLayout>
  );
};

export default UserRegistration;
