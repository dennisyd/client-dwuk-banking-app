import { useMutation } from "@tanstack/react-query";
import { putCustomer } from "../api/api";
import { CustomerProps } from "../../definitions/customer/types/CustomerProps";

export function usePutCustomer() {
  return useMutation({
    mutationFn: (puttedCustomer: CustomerProps) => putCustomer(puttedCustomer)
  });
}
