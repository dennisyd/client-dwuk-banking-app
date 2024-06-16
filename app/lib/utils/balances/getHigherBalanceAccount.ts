import AccountProps from "../../definitions/AuthorProps";

export default function getHigherBalanceAccount(accounts: AccountProps[]) {
  const higherBalance = accounts.reduce((balance, account) => {
    if (account.balance > balance) return account.balance;
    else return balance;
  }, 0);
  return higherBalance;
}
