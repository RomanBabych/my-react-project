export default function OfficerProfile({
  officer: { name, rank, age, status, skills },
}) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Rank: {rank}</p>
      <p>Age: {age}</p>
      <p>Status: {status === "Active" ? "Is active" : "Is retired"}</p>
      <p>Skills:</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
