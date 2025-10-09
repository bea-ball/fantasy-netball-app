import PlayerSelection from "@/app/components/player/player-selection";

export default function MyTeamPage() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-5 hidden md:block">
        <PlayerSelection></PlayerSelection>
      </div>
    </div>
  );
}
