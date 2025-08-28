import projects from "../data/projects";

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>
      <ul className="space-y-4">
        {projects.map((p, i) => (
          <li key={i} className="p-4 border rounded-lg shadow bg-white dark:bg-gray-800">
            <h2 className="font-semibold text-lg">{p.title}</h2>
            <p>{p.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}