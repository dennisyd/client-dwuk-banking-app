import CustomersNavbar from "./CustomersNavbar/CustomersNavbar";

export default function CustomersLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <CustomersNavbar />
      {children}
    </section>
  );
}
