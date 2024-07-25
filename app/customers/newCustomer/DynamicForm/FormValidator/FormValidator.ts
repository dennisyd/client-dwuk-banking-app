import * as yup from "yup";

export default class FormValidator {
  async validate(schema: yup.Schema, value: any) {
    try {
      await schema.validate(value);
      return true;
    } catch (e) {
      if (e instanceof yup.ValidationError) {
        const message = e.errors.toString();
        const yupError = new Error(message);
        return yupError;
      } else {
        const unknownError = new Error("Unknown Error");
        return unknownError;
      }
    }
  }
}
