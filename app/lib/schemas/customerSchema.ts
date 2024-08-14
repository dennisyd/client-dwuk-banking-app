import * as yup from "yup";

export const customerSchemaWithoutID = yup.object().shape({
  first_name: yup
    .string()
    .required("First Name is a required field")
    .min(3, "Must be at least 3 characters long")
    .defined("Must be defined"),
  last_name: yup
    .string()
    .required("Last Name is a required field")
    .min(3, "Must be at least 3 characters long")
    .defined("Must be defined"),
  email: yup
    .string()
    .required("Email is a required field")
    .email("Must be a valid email")
    .defined("Must be defined")
});

export const customerSchemaWithID = customerSchemaWithoutID.shape({
  customer_id: yup.number().required().integer().positive(),
  officer_id: yup.number().required().integer().positive()
});
