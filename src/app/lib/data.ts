"use server";

import postgres from "postgres";
import { Player } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchPlayers() {
  try {
    console.log("Fetching players...");

    const data = await sql<Player[]>`SELECT * FROM players`;

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch players.");
  }
}
