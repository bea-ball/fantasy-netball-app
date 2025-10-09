"use client";
import { useUser } from "@stackframe/stack";
import { redirect, RedirectType } from "next/navigation";

export default function MyTeamPage() {
  useUser({ or: "redirect" });
  redirect("/fantasy/my-team", RedirectType.replace);
}
