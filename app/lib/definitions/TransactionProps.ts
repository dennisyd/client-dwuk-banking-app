export default interface TransactionProps {
  transaction_id: number;
  from_account_id: number;
  to_account_id: number;
  officer_id: number;
  transaction_date: string;
  amount: number;
}
