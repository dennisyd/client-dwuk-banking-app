import AccountsNavbar from "./components/AccountsNavbar/AccountsNavbar";

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
