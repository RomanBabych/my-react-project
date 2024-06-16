import OfficerProfile from "../OfficerProfile/OfficerProfile";
import css from "./OfficerList.module.css";

export default function OfficerList({ items }) {
  return (
    <ul className={css.list}>
      {items.map((officer) => (
        <li key={officer.id}>
          <OfficerProfile officer={officer} />
        </li>
      ))}
    </ul>
  );
}
