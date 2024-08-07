import * as yup from "yup";

export const nameSchema = yup
  .string()
  .required("Required filed")
  .min(3, "Must be at least 3 characters long")
  .defined("Must be defined");

export const emailSchema = yup
  .string()
  .required("Required field")
  .email("Must be a valid email")
  .defined();
