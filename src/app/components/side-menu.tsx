"use client";

import { ReactNode, useState } from "react";
import { Menu } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideMenu({ children }: { children: ReactNode }) {
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
      {isMenuOpen}

      <div className=" md:hidden">
        <div
          className={clsx(
            "bg-stone-950 h-screen w-screen absolute top-0 left-0 opacity-0 transition",
            { "opacity-50": isMenuOpen }
          )}
        ></div>
        <div
          className={clsx(
            "bg-white transition h-screen w-50 absolute top-0 left-0 -translate-x-50",
            { "translate-x-0": isMenuOpen }
          )}
        ></div>
      </div>

      <div
        className={clsx("flex items-center md:static", { fixed: isMenuOpen })}
      >
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
          className={clsx(
            "font-normal flex-col p-10 w-fit transition flex absolute md:static",
            {
              "-translate-x-40": !isMenuOpen,
            }
          )}
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
            "md:-translate-x-40": !isMenuOpen,
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
