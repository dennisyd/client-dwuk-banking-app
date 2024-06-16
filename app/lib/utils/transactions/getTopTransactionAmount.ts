import TransactionProps from "../../definitions/TransactionProps";

export default function getTopTransactionAmount(
  todaysTransactions: TransactionProps[]
) {
  const topTransactionAmount = todaysTransactions.reduce(
    (amount, transaction) => {
      if (transaction.amount > amount) return transaction.amount;
      else return amount;
    },
    0
  );
  return topTransactionAmount;
}
