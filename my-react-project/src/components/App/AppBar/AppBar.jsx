import Logo from "../../Logo/Logo";
import UserMenu from "../../UserMenu/UserMenu";
import "./AppBar.css";

export default function AppBar() {
  return (
    <header className="app-header">
      <h1>Title</h1>
      <Logo />
      <UserMenu />
    </header>
  );
}
