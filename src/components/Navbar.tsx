"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Pramuka", path: "/pramuka" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-purple-600 text-white px-6 py-4 shadow-md">
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`${
                pathname === item.path ? "font-bold underline" : "hover:underline"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}