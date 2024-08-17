import { getAccountsWithCustomers, getCustomers } from "../api/api";
import { useQuery } from "@tanstack/react-query";

export function useCustomers() {
  return useQuery({
    queryKey: ["get-all-customers"],
    queryFn: getCustomers
  });
}

export function useAccountsWithCustomers() {
  return useQuery({
    queryKey: ["get-accounts-with-customers"],
    queryFn: getAccountsWithCustomers
  });
}
