export default interface AccountProps {
  account_id: number;
  customer_id: number;
  officer_id: number;
  open_date: string;
  close_date?: string;
  last_activity_date: string;
  status: "ACTIVE" | "CLOSED" | "FROZEN";
  balance: number;
}