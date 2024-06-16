import clsx from "clsx";
import css from "./OfficerProfile.module.css";

export default function OfficerProfile({
  officer: { name, rank, age, active, skills },
}) {
  const statusClsx = clsx(css.text, active ? css.isActive : css.isRetired);
  const containerClsx = clsx(
    css.container,
    active ? css.isActiveBorder : css.isRetiredBorder
  );
  return (
    <div className={containerClsx}>
      <p className={css.text}>Name: {name}</p>
      <p className={css.text}>Rank: {rank}</p>
      <p className={css.text}>Age: {age}</p>
      <p className={css.text}>
        <span className={statusClsx}>{active ? "Active" : "Retired"}</span>
      </p>
      <p className={css.text}>Skills:</p>
      <ul className={css.list}>
        {skills.map((skill, index) => (
          <li className={css.listItem} key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
