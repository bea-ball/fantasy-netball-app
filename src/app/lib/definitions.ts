export type Club =
  | "SWI"
  | "VIX"
  | "LIG"
  | "FEV"
  | "GIA"
  | "FIR"
  | "MAV"
  | "THU";
export type Position = "GS" | "GD" | "GA" | "C" | "WA" | "WD" | "GK";
export type Reserve = 1 | 2 | 3;

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Player = {
  id: string;
  name: string;
  club: "SWI" | "VIX" | "LIG" | "FEV" | "GIA" | "FIR" | "MAV" | "THU";
  positions: Position[];
  image_url?: string;
};
