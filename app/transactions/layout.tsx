import TransactionsNavbar from "./TransactionsNavbar/TransactionsNavbar";

export default function TransactionsLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <TransactionsNavbar />
      {children}
    </section>
  );
}
