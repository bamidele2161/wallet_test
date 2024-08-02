import * as yup from "yup";

export const loginSchema = yup.object().shape({
  emailAddress: yup
    .string()
    .email("Enter a valid email address")
    .required("Enter your email"),
  password: yup.string().required("Enter your password"),
});
