import { useMutation } from "@tanstack/react-query";
import { putCustomer } from "../api/api";
import {
  CustomerProps,
  CustomerPropsWithoutID
} from "../../definitions/customer/types/CustomerProps";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { postCustomer } from "../api/api";

export function usePutCustomer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (puttedCustomer: CustomerProps) => putCustomer(puttedCustomer),
    onError: () => toast.error("An error occurred while updating the customer"),
    onSuccess: () => toast.success("Customer updated successfully"),
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["get-all-customers"] });
    }
  });
}

export function usePostCustomer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newCustomer: CustomerPropsWithoutID) =>
      postCustomer(newCustomer),
    onError: () => toast.error("An error occurred while adding new customer"),
    onSuccess: () => toast.success("Customer added successfully"),
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["get-all-customers"] });
    }
  });
}
