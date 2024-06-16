import TransactionProps from "../../definitions/TransactionProps";

export default function getTotalTransferredToday(
  todayTransactions: TransactionProps[]
) {
  const todayTotalFundsTransferred = todayTransactions.reduce(
    (total, transaction) => {
      return total + transaction.amount;
    },
    0
  );
  return todayTotalFundsTransferred;
}
