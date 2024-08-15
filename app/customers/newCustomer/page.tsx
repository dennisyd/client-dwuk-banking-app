"use client";
import Form from "./Form/Form";
import { SubmitHandler } from "react-hook-form";
import { CustomerPropsWithoutID } from "@/app/lib/definitions/customer/types/CustomerProps";
import { usePostCustomer } from "@/app/lib/services/mutations/mutations";
import { useRouter } from "next/navigation";

export default function NewCustomer() {
  const router = useRouter();
  const postCustomerMutation = usePostCustomer();

  const onSubmit: SubmitHandler<CustomerPropsWithoutID> = (newCustomer) => {
    postCustomerMutation.mutate(newCustomer);
    router.push("/customers");
  };

  return (
    <div>
      <Form onSubmit={onSubmit} />
    </div>
  );
}
