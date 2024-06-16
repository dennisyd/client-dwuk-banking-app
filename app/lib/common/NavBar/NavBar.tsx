import LinkWrapper from "./LinkWrapper";
import colours from "../../utils/colors";

export default function NavBar() {
  return (
    <nav>
      <div className="nav-bar-container">
        <LinkWrapper href="/" link="Dashboard" />
        <LinkWrapper href="/accounts" link="Accounts" />
        <LinkWrapper href="/newTransaction" link="New Transaction" />
      </div>
    </nav>
  );
}
