import axios from "axios";
import {
  CustomerProps,
  CustomerPropsWithoutID
} from "../../definitions/customer/types/CustomerProps";
import { NewTransactionFormSubmitValues } from "../../definitions/transaction/types/NewTransactionFormSubmitValues";
import { AccountWithCustomer } from "../../definitions/account/types/accountWithCustomer";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const axiosInstance = axios.create({ baseURL: baseURL });

export async function getCustomers() {
  const response = await axiosInstance.get<string>("customers");
  const customers: CustomerProps[] = JSON.parse(response.data);
  return customers;
}

export async function getAccountsWithCustomers() {
  const response = await axiosInstance.get<string>(
    "accounts/accountsWithCustomers"
  );
  const accountsWithCustomers: AccountWithCustomer[] = JSON.parse(response.data);
  return accountsWithCustomers;
}

export async function putCustomer(editedCustomer: CustomerProps) {
  const response = await axiosInstance.put(
    `customers/${editedCustomer.customer_id}`,
    editedCustomer
  );
  return response;
}

export async function postCustomer(customer: CustomerPropsWithoutID) {
  return await axiosInstance.post("customers", customer);
}

export async function postTransaction(
  transaction: NewTransactionFormSubmitValues
) {
  return await axiosInstance.post(
    "transactions/executeTransaction",
    transaction
  );
}
