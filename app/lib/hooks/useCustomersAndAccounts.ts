import { useEffect, useState } from "react";
import AccountProps from "../definitions/AuthorProps";
import { CustomerAndAccountProps } from "../definitions/CustomerAndAccount";
import CustomerProps from "../definitions/CustomerProps";

export default function useCustomersAndAccounts(
  customers: CustomerProps[],
  accounts: AccountProps[]
) {
  const [customersAndAccounts, setCustomersAndAccounts] = useState<
    CustomerAndAccountProps[]
  >([]);

  const customersAndAccountsGroup = customers.map((customer) => {
    const account = accounts.find(
      (account) => account.customer_id === customer.customer_id
    );

    const customerAndAccount: CustomerAndAccountProps = {
      customer_id: customer.customer_id,
      officer_id: customer.officer_id,
      account_id: account ? account?.account_id : 0,
      first_name: customer.first_name,
      last_name: customer.last_name,
      email: customer.email,
      open_date: account ? account?.open_date : "",
      close_date: account?.close_date,
      last_activity_date: account ? account?.last_activity_date : "",
      status: account ? account?.status : "ACTIVE",
      balance: account ? account?.balance : 0
    };
    return customerAndAccount;
  });

  setCustomersAndAccounts(customersAndAccountsGroup);

  return { customersAndAccounts, setCustomersAndAccounts };
}
