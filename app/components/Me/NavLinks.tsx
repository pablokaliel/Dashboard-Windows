"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Sobre Mim", href: "/unlocked/aboutMe" },
  { name: "Contatos", href: "/unlocked/aboutMe/contact" },
  { name: "Meu PC", href: "/unlocked/aboutMe/pc" },
  { name: "Meus Projetos", href: "/unlocked/aboutMe/projects" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "hover:bg-[#3e3d3d] w-24 truncate text-xs flex items-center px-2 py-1 rounded-t-md",
              {
                "bg-[#3e3d3d]": pathname === link.href,
              }
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
