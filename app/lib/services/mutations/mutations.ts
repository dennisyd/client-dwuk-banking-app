import { useMutation } from "@tanstack/react-query";
import { putCustomer } from "../api/api";
import {
  CustomerProps,
  CustomerPropsWithoutID
} from "../../definitions/customer/types/CustomerProps";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { postCustomer } from "../api/api";
import { NewTransactionFormSubmitValues } from "../../definitions/transaction/types/NewTransactionFormSubmitValues";
import { postTransaction } from "../api/api";
import { putAccountStatus } from "../api/api";
import PutAccountStatus from "../../definitions/account/types/PutAccountStatus";

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

export function usePostTransaction() {
  return useMutation({
    mutationFn: (transaction: NewTransactionFormSubmitValues) =>
      postTransaction(transaction),
    onError: () => {
      toast.error("An error occurred when creating a new transaction");
    },
    onSuccess: () => {
      toast.success("New transaction created successfully");
    }
  });
}

export function usePutAccountsStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ accountIDs, status }: PutAccountStatus) =>
      putAccountStatus({ accountIDs, status }),
    onError: () => {
      toast.error("An error occurred when updating accounts status");
    },
    onSuccess: () => {
      toast.success("Account status updated successfully");
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["get-accounts-with-customers"]
      });
    }
  });
}
