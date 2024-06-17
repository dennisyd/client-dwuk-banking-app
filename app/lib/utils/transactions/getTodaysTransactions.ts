import TransactionProps from "../../definitions/TransactionProps";

export default function getTodaysTransactions(
  transactions: TransactionProps[]
) {
  const todayTransactions = transactions.filter((transaction) => {
    const transactionMS = new Date(transaction.transaction_date).getTime();

    const todayMorning = getTodayMorningMs();

    if (isTodayTransaction(todayMorning, transactionMS)) {
      return true;
    } else return false;
  });
  return todayTransactions;
}

function getTodayMorningMs() {
  const todayMorning = new Date();
  todayMorning.setUTCHours(0, 0, 0);
  const todayMorningMs = todayMorning.getTime();
  return todayMorningMs;
}

function isTodayTransaction(todayMorning: number, transaction: number) {
  if (todayMorning <= transaction && transaction <= Date.now()) {
    return true;
  } else return false;
}
