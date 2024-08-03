import * as yup from "yup";

export const userRegistrationSchema = yup.object().shape({
  firstname: yup.string().required("Enter your first name"),
  lastname: yup.string().required("Enter your last name"),
  middlename: yup.string().required("Enter your middle name"),
  emailaddress: yup
    .string()
    .email("Enter a valid email address")
    .required("Enter your email"),
  password: yup.string().min(6).max(15).required("Enter a password"),
  phonenumber: yup.string().required("Enter your phone number"),
  role: yup.string().required("Enter your role"),
});

export const activateSchema = yup.object().shape({
  activationCode: yup.string().min(6).max(8).required("Enter code"),
});
