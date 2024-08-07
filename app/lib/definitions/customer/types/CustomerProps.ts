export interface CustomerPropsWithoutID {
  first_name: string;
  last_name: string;
  email: string;
}

export interface CustomerProps extends CustomerPropsWithoutID {
  customer_id: number;
  officer_id: number;
}
