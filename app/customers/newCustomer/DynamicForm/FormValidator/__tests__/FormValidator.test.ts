import FormValidator from "../FormValidator";
import * as yup from "yup";
import Chance from "chance";

const nameSchema = yup
  .string()
  .required("Required filed")
  .min(3, "Must be at least 3 characters long")
  .defined("Must be defined");

const emailSchema = yup
  .string()
  .required("Required field")
  .email("Must be a valid email")
  .defined();

const some = new Chance();
const validNames = Array.from({ length: 10 }, () => some.first());
const invalidNames = Array.from({ length: 10 }, (_, i) => {
  if (i % 2) return "";
});

const validator = new FormValidator();

test.each(validNames)(
  "if validates name input correctly with valid values",
  async (validName) => {
    const validation = await validator.validate(nameSchema, validName);

    expect(validation.success).toBe(true);
  }
);

test.each(invalidNames)(
  "if validates name input correctly with invalid values",
  async (invalidName) => {
    const validation = await validator.validate(nameSchema, invalidName);

    expect(validation.success).toBe(false);
  }
);
