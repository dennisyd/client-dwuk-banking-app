import LinkWrapper from "./LinkWrapper";

export default function NavBar() {
  return (
    <nav>
      <div className="nav-bar-container">
        <LinkWrapper href="/" link="Dashboard" />
        <LinkWrapper href="/accounts" link="Accounts" />
        <LinkWrapper href="/accounts/newAccount" link="New Account" />
        <LinkWrapper href="/newTransaction" link="New Transaction" />
      </div>
    </nav>
  );
}
