import FormValidator from "../FormValidator";
import * as yup from "yup";

test("if validates input correctly", async () => {
  const name = yup
    .string()
    .required("Required filed")
    .min(3, "Must be at least 3 characters long")
    .defined("Must be defined");

  const email = yup
    .string()
    .required("Required field")
    .email("Must be a valid email")
    .defined();

  const validator = new FormValidator();
  const validation = await validator.validate(name, "har");
  if (validation instanceof Error) {
    console.log("validation - true error", validation.message);
  } else {
    console.log("validation - false", validation);
  }
});
