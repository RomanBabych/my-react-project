import OfficerProfile from "../OfficerProfile/OfficerProfile";

export default function OfficerList({ items }) {
  return (
    <ul>
      {items.map((officer) => (
        <li key={officer.id}>
          <OfficerProfile officer={officer} />
        </li>
      ))}
    </ul>
  );
}
