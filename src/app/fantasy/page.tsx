"use client";
import { useUser } from "@stackframe/stack";

export default function MyTeamPage() {
  useUser({ or: "redirect" });

  return "My Team";
}
