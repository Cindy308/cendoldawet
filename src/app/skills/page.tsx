export default function Page() {
  const skills = [
    "HTML, CSS, JavaScript",
    "React & Next.js",
    "MySQL Database",
    "UI/UX Design",
    "Tailwind CSS",
  ];

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Skills</h1>
      <ul className="list-disc list-inside space-y-2">
        {skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </section>
  );
}