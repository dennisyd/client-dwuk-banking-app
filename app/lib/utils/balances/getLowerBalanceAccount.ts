import AccountProps from "../../definitions/AuthorProps";

export default function getLowerBalanceAccount(accounts: AccountProps[]) {
  const loweBalance = accounts.reduce((balance, account) => {
    if (account.balance < balance) return account.balance;
    else return balance;
  }, Infinity);
  return loweBalance;
}
