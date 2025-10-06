"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideMenu({ children }) {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const pathname = usePathname();

  const links = [
    { name: "My team", href: "/my-team" },
    {
      name: "Leaderboard",
      href: "/leaderboard",
    },
    { name: "Statistics", href: "/statistics" },
    { name: "How to play", href: "/how-to-play" },
  ];

  return (
    <div className="p-5">
      <div></div>
      <div className="flex  items-center">
        <Menu
          className={clsx(
            "hover:bg-purple-100 rounded-4xl p-1 transition cursor-pointer",
            {
              "rotate-90": !isMenuOpen,
            }
          )}
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
        <span className="brand-gradient px-3 font-medium tracking-tighter text-lg">
          Fantasy Netball
        </span>
      </div>
      <div className="flex">
        <div
          className={clsx("font-normal flex flex-col p-10 w-fit transition", {
            "-translate-x-40": !isMenuOpen,
          })}
        >
          {links.map((link) => {
            return (
              <Link key={link.name} href={link.href} className="py-1">
                <span
                  className={clsx("text-sm hover:font-semibold transition", {
                    "font-semibold brand-gradient": pathname === link.href,
                  })}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
        <div
          className={clsx("h-fill transition", {
            "-translate-x-40": !isMenuOpen,
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
