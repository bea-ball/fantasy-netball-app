import { fetchPlayers } from "@/app/lib/data";
import ImageWithFallback from "../common/image-with-fallback";

export default async function PlayerSelection() {
  const players = await fetchPlayers();

  return (
    <div className="h-(--content-height) overflow-scroll">
      {players.map((player) => (
        <div key={player.id} className="flex">
          <div className="relative h-20 w-20">
            <ImageWithFallback
              alt={`Picture of ${player.name}`}
              className="object-cover"
              fill={true}
              style={{
                objectFit: "cover", // cover, contain, none
              }}
              fallbackSrc="https://netball.com.au/themes/custom/netball_theme/images/players/player_headshot_default.png"
              src={
                player.image_url ??
                `https://netball.com.au/sites/netballnation/files/styles/player_headshot_440x440/public/2025-03/2025_SSN_Web_Headshot_${
                  player.club
                }_${player.name
                  .split(" ")
                  .reverse()
                  .join("_")
                  .replace("’", "%27")
                  .replace("'", "")
                  .toUpperCase()}.png`
              }
            />
          </div>
          <div className="flex flex-col justify-center p-3">
            <p className="text-sm font-medium">{player.name}</p>
            <p className="text-xs">{player.positions.join(", ")}</p>
          </div>
          <button></button>
        </div>
      ))}
    </div>
  );
}
