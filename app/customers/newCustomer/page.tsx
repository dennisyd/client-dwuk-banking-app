"use client";
import toast from "react-hot-toast";
import DynamicForm from "./DynamicForm/DynamicForm";
import { CustomerPropsWithoutID } from "@/app/lib/definitions/customer/types/CustomerProps";

export default function NewCustomer() {
  const initialValues: CustomerPropsWithoutID = {
    first_name: "",
    last_name: "",
    email: ""
  };

  function validate(){

  }

  function submit(){
    
  }

  return (
    <div>
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
          try {
            const req = await fetch(apiBaseUrl + "/customers", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: JSON.stringify(values)
            });

            if (req.ok) {
              toast.success(`${values.first_name} added successfully.`);
              actions.resetForm();
            } else {
              throw new Error();
            }
          } catch (error) {
            if (error instanceof Error) {
              toast.error("Something went wrong.");
            }
          }
        }}
      >
          <DynamicForm />
    </div>
  );
}
