export default function CustomersLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <h4>Customers Layout</h4>
      {children}
    </section>
  );
}
