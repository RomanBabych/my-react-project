import css from "./UserMenu.module.css";

export default function UserMenu() {
  return (
    <div className={css.userMenu}>
      <span className={css.username}>Hello username</span>
      <button className={css.logOutButton}>Log out</button>
    </div>
  );
}
