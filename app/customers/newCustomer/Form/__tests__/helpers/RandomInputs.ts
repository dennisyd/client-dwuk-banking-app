import Chance from "chance";
import { CustomerPropsWithoutID } from "@/app/lib/definitions/customer/types/CustomerProps";

export default class RandomInputs {
  create() {
    const some = new Chance();

    const inputs = Array.from({ length: 6 }, () => {
      const firstName = some.first();
      const lastName = some.last();
      const email = some.email();

      const values: CustomerPropsWithoutID = {
        first_name: firstName,
        last_name: lastName,
        email: email
      };

      return values;
    });
    return inputs;
  }
}
