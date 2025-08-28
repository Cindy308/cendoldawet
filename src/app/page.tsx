import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold mb-4">Cindy Hariati Syaputri</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Web Developer | UI/UX Enthusiast | Pelajar RPL
      </p>
      <Image
        src="/Cindy.jpg"
        alt="Foto Cindy"
        width={150}
        height={150}
        className="rounded-full mx-auto border-4 border-indigo-400 shadow-lg"
      />
      <div className="mt-6 flex justify-center gap-4">
        <Link href="about" className="btn">About Me</Link>
        <Link href="projects" className="btn">My Projects</Link>
        <Link href="pramuka" className="btn">Pramuka</Link>
      </div>
    </section>
  );
}