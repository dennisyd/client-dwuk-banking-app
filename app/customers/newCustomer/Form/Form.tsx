import {
  FormWrapper,
  Header,
  FieldsWrapper
} from "@/app/lib/common/formComponents/formComponents";
import Button from "@/app/lib/common/Button";
import colours from "@/app/lib/constants/colors";
import * as yup from "yup";
import { Result } from "../../../lib/utils/ResultGenerator/ResultGenerator";
import { useForm } from "react-hook-form";
import { CustomerPropsWithoutID } from "@/app/lib/definitions/customer/types/CustomerProps";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "../newCustomer.module.css";

const userSchema = yup.object().shape({
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

interface FormProps {
  validate: (schema: yup.Schema, value: any) => Promise<Result>;
  onSubmit: (user: CustomerPropsWithoutID) => void;
}

export default function Form({ validate, onSubmit }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(userSchema) });

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
          <p className={styles.error}>{errors.first_name?.message}</p>

          <input
            {...register("last_name")}
            placeholder="Last Name"
            className="input-element"
          />
          <p className={styles.error}>{errors.last_name?.message}</p>

          <input
            {...register("email")}
            placeholder="Email"
            className="input-element"
          />
          <p className={styles.error}>{errors.email?.message}</p>
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
