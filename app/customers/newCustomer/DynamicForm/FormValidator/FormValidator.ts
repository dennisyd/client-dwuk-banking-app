import * as yup from "yup";
import { ResultGenerator } from "result-generator/dist/index.cjs";

export default class FormValidator {
  private resultGenerator = new ResultGenerator();

  async validate(schema: yup.Schema, value: any) {
    try {
      await schema.validate(value);
      return this.resultGenerator.generateSuccess("Valid");
    } catch (e) {
      let error = new Error("Unknown Error");
      if (e instanceof yup.ValidationError) {
        error = new Error(e.errors.toString());
      }
      return this.resultGenerator.generateError(error);
    }
  }
}
