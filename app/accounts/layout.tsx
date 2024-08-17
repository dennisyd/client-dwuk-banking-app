import AccountsNavbar from "./AccountsNavbar/AccountsNavbar";

export default function AccountsLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <AccountsNavbar />
      {children}
    </section>
  );
}
