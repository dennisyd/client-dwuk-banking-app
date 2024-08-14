import axios from "axios";
import { CustomerProps } from "../../definitions/customer/types/CustomerProps";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const axiosInstance = axios.create({ baseURL: baseURL });

export async function getCustomers() {
  const response = await axiosInstance.get<string>("customers");
  const customers: CustomerProps[] = JSON.parse(response.data);
  return customers;
}

export async function putCustomer(editedCustomer: CustomerProps) {
  const response = await axiosInstance.put(
    `customers/${editedCustomer.customer_id}`,
    editedCustomer
  );
  return response;
}
