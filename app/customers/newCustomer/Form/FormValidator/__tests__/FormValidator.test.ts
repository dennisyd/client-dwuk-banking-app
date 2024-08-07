import FormValidator from "../FormValidator";
import { nameSchema, emailSchema } from "./helpers/schemas";
import { validNames, validEmails, undefinedAndIntegers } from "./helpers/data";

const validator = new FormValidator();

test.each(validNames)(
  "if validates name input correctly with valid values",
  async (validName) => {
    const validation = await validator.validate(nameSchema, validName);

    expect(validation.success).toBe(true);
  }
);

test.each(undefinedAndIntegers)(
  "if validates name input correctly with invalid values",
  async (invalidName) => {
    const validation = await validator.validate(nameSchema, invalidName);

    expect(validation.success).toBe(false);
  }
);

test.each(validEmails)(
  "if validates email input correctly with valid values",
  async (validEmail) => {
    const validation = await validator.validate(emailSchema, validEmail);

    expect(validation.success).toBe(true);
  }
);

test.each(undefinedAndIntegers)(
  "if validated email input correctly with invalid values",
  async (invalidValue) => {
    const validation = await validator.validate(emailSchema, invalidValue);

    expect(validation.success).toBe(false);
  }
);
