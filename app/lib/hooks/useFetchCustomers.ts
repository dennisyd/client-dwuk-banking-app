import { useState, useEffect } from "react";
import { CustomerProps } from "../definitions/customer/CustomerProps";
import toast from "react-hot-toast";

async function fetchCustomers(url: string): Promise<CustomerProps[]> {
  const res = await fetch(url);
  if (!res.ok) {
    toast.error("An error occurred while fetching the customers.");
  }
  const resBody = await res.json();
  const customers: CustomerProps[] = await JSON.parse(resBody);
  return customers;
}

export default function useFetchCustomers(url: string) {
  const [customers, setCustomers] = useState<CustomerProps[]>([]);

  useEffect(() => {
    (async () => {
      setCustomers(await fetchCustomers(url));
    })();
  }, [url]);

  return {
    customers: customers,
    setCustomers: setCustomers
  };
}
