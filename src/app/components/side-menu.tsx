"use client";

import clsx from "clsx";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useActionState, useState } from "react";
import styles from "../styles/sidemenu.module.css";
import { signOut } from "next-auth/react";
import { logout } from "../lib/actions";

export default function SideMenu({ children }: { children: ReactNode }) {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const pathname = usePathname();

  const [errorMessage, formAction, isPending] = useActionState(
    logout,
    undefined
  );

  const links = [
    { name: "My team", href: "/fantasy" },
    {
      name: "Leaderboard",
      href: "/fantasy/leaderboard",
    },
    { name: "Statistics", href: "/fantasy/statistics" },
    { name: "How to play", href: "/fantasy/how-to-play" },
  ];

  return (
    <div className="p-5 w-screen">
      <div className=" md:hidden">
        <div
          className={clsx(
            "bg-stone-950 h-screen w-screen absolute top-0 left-0 opacity-0 transition",
            { "opacity-50": isMenuOpen }
          )}
          onClick={() => setMenuOpen(false)}
        ></div>
        <div
          className={clsx(
            "bg-white transition h-screen w-50 absolute top-0 left-0 -translate-x-50",
            { "translate-x-0": isMenuOpen }
          )}
        ></div>
      </div>

      <div className="flex fixed items-center z-100">
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

      <div className="flex md:h-screen">
        <div
          className={clsx(
            "font-normal flex-col p-10 mt-5 w-fit transition flex absolute md:static justify-between",
            {
              "-translate-x-50": !isMenuOpen,
            },
            styles.sidemenu
          )}
        >
          <div className="flex flex-col">
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

          <form action={formAction} className="bottom-8 ">
            <button className="flex grow items-center justify-center gap-2 transition rounded-md bg-purple-50 p-3 text-sm font-medium hover:bg-purple-100 hover:text-purple-600">
              <div>Sign Out</div>
            </button>
          </form>
        </div>
        <div
          className={clsx("h-fill transition mt-10", {
            "md:-translate-x-50": !isMenuOpen,
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
