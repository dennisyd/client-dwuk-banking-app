import {
  FormWrapper,
  Header,
  FieldsWrapper
} from "@/app/lib/components/common/formComponents/formComponents";
import Button from "@/app/lib/components/common/Button";
import colours from "@/app/lib/constants/colors";
import { useForm } from "react-hook-form";
import { CustomerPropsWithoutID } from "@/app/lib/definitions/customer/types/CustomerProps";
import { yupResolver } from "@hookform/resolvers/yup";
import sharedStyles from "../../../lib/styles/shared.module.css";
import { customerSchemaWithoutID } from "@/app/lib/schemas/customerSchema";

interface FormProps {
  onSubmit: (user: CustomerPropsWithoutID) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CustomerPropsWithoutID>({
    resolver: yupResolver(customerSchemaWithoutID)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper>
        <Header>New Customer</Header>
        <FieldsWrapper>
          <input
            {...register("first_name")}
            placeholder="First Name"
            className="input-element"
          />
          <p className={sharedStyles.error}>{errors.first_name?.message}</p>

          <input
            {...register("last_name")}
            placeholder="Last Name"
            className="input-element"
          />
          <p className={sharedStyles.error}>{errors.last_name?.message}</p>

          <input
            {...register("email")}
            placeholder="Email"
            className="input-element"
          />
          <p className={sharedStyles.error}>{errors.email?.message}</p>
        </FieldsWrapper>

        <Button
          type="submit"
          text="Submit"
          onClick={() => {}}
          primaryColor={colours.black}
        />
      </FormWrapper>
    </form>
  );
}
