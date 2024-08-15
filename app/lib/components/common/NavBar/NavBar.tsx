import LinkWrapper from "./LinkWrapper";

export default function NavBar() {
  return (
    <nav>
      <div className="nav-bar-container">
        <LinkWrapper href="/" link="Dashboard" />
        <LinkWrapper href="/customers" link="Customers" />
        <LinkWrapper href="/customers/newCustomer" link="New Customer" />
        <LinkWrapper href="/newTransaction" link="New Transaction" />
      </div>
    </nav>
  );
}
