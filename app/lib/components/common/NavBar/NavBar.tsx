import LinkWrapper from "./LinkWrapper";

export default function NavBar() {
  return (
    <nav>
      <div className="nav-bar-container">
        <LinkWrapper href="/" link="Dashboard" />
        <LinkWrapper href="/customers" link="Customers" />
        <LinkWrapper href="/accounts" link="Accounts" />
        <LinkWrapper href="/transactions" link="Transactions" />
      </div>
    </nav>
  );
}
