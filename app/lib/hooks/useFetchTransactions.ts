import { useState, useEffect } from "react";
import TransactionProps from "../definitions/TransactionProps";
import toast from "react-hot-toast";

async function fetchTransactions(url: string): Promise<TransactionProps[]> {
  const res = await fetch(url);
  if (!res.ok) {
    toast.error("An error occurred while fetching the transactions.");
  }
  const resBody = await res.json();
  const transactions: TransactionProps[] = await JSON.parse(resBody)
  return transactions;
}

export default function useFetchTransactions(url: string) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    (async () => {
      setTransactions(await fetchTransactions(url));
    })();
  }, [url]);

  return {
    transactions: transactions,
    setTransactions: setTransactions
  };
}