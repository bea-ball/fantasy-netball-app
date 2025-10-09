import bcrypt from "bcrypt";
import postgres from "postgres";

const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "Taco",
    email: "beatrix.leung@hotmail.com",
    password: "Taco2214",
  },
];

const players = [
  {
    id: "1014724",
    name: "Grace Nweke",
    prices: [
      {
        round: 1,
        price: 205000,
      },
      {
        round: 5,
        price: 213000,
      },
      {
        round: 8,
        price: 226000,
      },
      {
        round: 11,
        price: 233000,
      },
    ],
    positions: ["GS"],
    club: "SWI",
  },
  {
    id: "1001708",
    name: "Kiera Austin",
    prices: [
      {
        round: 1,
        price: 200000,
      },
      {
        round: 5,
        price: 210000,
      },
      {
        round: 8,
        price: 216500,
      },
      {
        round: 11,
        price: 236000,
      },
    ],
    positions: ["GA", "GS"],
    club: "VIX",
  },
  {
    id: "1001357",
    name: "Cara Koenen",
    prices: [
      {
        round: 1,
        price: 185000,
      },
      {
        round: 5,
        price: 187000,
      },
      {
        round: 8,
        price: 187000,
      },
      {
        round: 11,
        price: 189500,
      },
    ],
    positions: ["GS", "GA"],
    club: "LIG",
  },
  {
    id: "994215",
    name: "Alice Teague-Neeld",
    prices: [
      {
        round: 1,
        price: 180000,
      },
      {
        round: 5,
        price: 198000,
      },
      {
        round: 8,
        price: 214000,
      },
      {
        round: 11,
        price: 233500,
      },
    ],
    positions: ["WA", "GA"],
    club: "FEV",
  },
  {
    id: "1001711",
    name: "Sophie Garbin",
    prices: [
      {
        round: 1,
        price: 170000,
      },
      {
        round: 5,
        price: 171500,
      },
      {
        round: 8,
        price: 173000,
      },
      {
        round: 11,
        price: 181500,
      },
    ],
    positions: ["GS", "GA"],
    club: "VIX",
  },
  {
    id: "80475",
    name: "Steph Fretwell",
    prices: [
      {
        round: 1,
        price: 170000,
      },
      {
        round: 5,
        price: 171500,
      },
      {
        round: 8,
        price: 175000,
      },
      {
        round: 11,
        price: 178500,
      },
    ],
    positions: ["GA", "GS"],
    club: "LIG",
  },
  {
    id: "999128",
    name: "Helen Housby",
    prices: [
      {
        round: 1,
        price: 165000,
      },
      {
        round: 5,
        price: 178000,
      },
      {
        round: 8,
        price: 192000,
      },
      {
        round: 11,
        price: 199500,
      },
    ],
    positions: ["GA", "GS"],
    club: "SWI",
  },
  {
    id: "1016559",
    name: "Mary Cholhok",
    prices: [
      {
        round: 1,
        price: 160000,
      },
      {
        round: 5,
        price: 163000,
      },
      {
        round: 8,
        price: 161500,
      },
      {
        round: 11,
        price: 158500,
      },
    ],
    positions: ["GS"],
    club: "FIR",
  },
  {
    id: "80150",
    name: "Jo Harten",
    prices: [
      {
        round: 1,
        price: 160000,
      },
      {
        round: 5,
        price: 155000,
      },
      {
        round: 8,
        price: 145500,
      },
      {
        round: 11,
        price: 145500,
      },
    ],
    positions: ["GS", "GA"],
    club: "GIA",
  },
  {
    id: "1022296",
    name: "Jordan Cransberg",
    imageUrl:
      "https://netball.com.au/sites/netballnation/files/styles/player_headshot_440x440/public/2025-03/2025_SSN_Web_Headshot_FEV_CRASBERG_JORDAN.png",
    prices: [
      {
        round: 1,
        price: 35000,
      },
      {
        round: 5,
        price: 35000,
      },
      {
        round: 8,
        price: 35500,
      },
      {
        round: 11,
        price: 36000,
      },
    ],
    positions: ["C", "WA"],
    club: "FEV",
  },
  {
    id: "1026857",
    name: "Zoe Cransberg",
    prices: [
      {
        round: 1,
        price: 20000,
      },
      {
        round: 5,
        price: 18500,
      },
      {
        round: 8,
        price: 18000,
      },
      {
        round: 11,
        price: 17000,
      },
    ],
    positions: ["C", "WA"],
    club: "FEV",
  },
  {
    id: "80826",
    name: "Jhaniele Fowlder-Nembhard",
    prices: [
      {
        round: 5,
        price: 230000,
      },
      {
        round: 8,
        price: 248500,
      },
      {
        round: 11,
        price: 266000,
      },
    ],
    positions: ["GS"],
    club: "FEV",
  },
  {
    id: "1007298",
    name: "Sasha Glasgow",
    prices: [
      {
        round: 1,
        price: 150000,
      },
      {
        round: 5,
        price: 150000,
      },
      {
        round: 8,
        price: 153000,
      },
      {
        round: 11,
        price: 157500,
      },
    ],
    positions: ["GS", "GA"],
    club: "MAV",
  },
  {
    id: "1010545",
    name: "Shimona Jok",
    prices: [
      {
        round: 1,
        price: 145000,
      },
      {
        round: 5,
        price: 149500,
      },
      {
        round: 8,
        price: 152500,
      },
      {
        round: 11,
        price: 152500,
      },
    ],
    positions: ["GS"],
    club: "MAV",
  },
  {
    id: "80078",
    name: "Romelda Aiken-George",
    imageUrl:
      "https://netball.com.au/sites/netballnation/files/styles/player_headshot_440x440/public/2025-03/2025_SSN_Web_Headshot_THU_AIKEN-GEORGE_ROMELDA%20%281%29.png",
    prices: [
      {
        round: 1,
        price: 120000,
      },
      {
        round: 5,
        price: 123500,
      },
      {
        round: 8,
        price: 124500,
      },
      {
        round: 11,
        price: 129500,
      },
    ],
    positions: ["GS"],
    club: "THU",
  },
  {
    id: "1019169",
    name: "Sophie Dwyer",
    prices: [
      {
        round: 1,
        price: 115000,
      },
      {
        round: 5,
        price: 118500,
      },
      {
        round: 8,
        price: 123000,
      },
      {
        round: 11,
        price: 128000,
      },
    ],
    positions: ["GA", "GS"],
    club: "GIA",
  },
  {
    id: "995108",
    name: "Shanice Beckford",
    prices: [
      {
        round: 1,
        price: 105000,
      },
      {
        round: 5,
        price: 105000,
      },
      {
        round: 8,
        price: 104000,
      },
      {
        round: 11,
        price: 102000,
      },
    ],
    positions: ["GA"],
    club: "FEV",
  },
  {
    id: "80540",
    name: "Mwai Kumwenda",
    prices: [
      {
        round: 1,
        price: 105000,
      },
    ],
    positions: ["GS", "GA"],
    club: "FEV",
  },
  {
    id: "1029533",
    name: "Lauren Frew",
    prices: [
      {
        round: 1,
        price: 85000,
      },
      {
        round: 5,
        price: 86500,
      },
      {
        round: 8,
        price: 87500,
      },
      {
        round: 11,
        price: 87500,
      },
    ],
    positions: ["GA", "GS"],
    club: "THU",
  },
  {
    id: "1007306",
    name: "Tippah Dwan",
    prices: [
      {
        round: 1,
        price: 85000,
      },
      {
        round: 5,
        price: 80000,
      },
      {
        round: 8,
        price: 73000,
      },
      {
        round: 11,
        price: 6500,
      },
    ],
    positions: ["GA", "GS"],
    club: "FIR",
  },
  {
    id: "1022298",
    name: "Reilley Batcheldor",
    prices: [
      {
        round: 1,
        price: 55000,
      },
      {
        round: 5,
        price: 52500,
      },
      {
        round: 8,
        price: 51500,
      },
      {
        round: 11,
        price: 49500,
      },
    ],
    positions: ["GA", "GS"],
    club: "LIG",
  },
  {
    id: "1013629",
    name: "Matisse Letherbarrow",
    prices: [
      {
        round: 1,
        price: 50000,
      },
      {
        round: 5,
        price: 48500,
      },
      {
        round: 8,
        price: 47500,
      },
      {
        round: 11,
        price: 44500,
      },
    ],
    positions: ["GS"],
    club: "GIA",
  },
  {
    id: "1029501",
    name: "Emily Moore",
    prices: [
      {
        round: 1,
        price: 45000,
      },
      {
        round: 5,
        price: 45500,
      },
      {
        round: 8,
        price: 45500,
      },
      {
        round: 11,
        price: 44500,
      },
    ],
    positions: ["GA", "GS"],
    club: "FIR",
  },
  {
    name: "Sophie Fawns",
    prices: [
      {
        round: 1,
        price: 35000,
      },
      {
        round: 5,
        price: 32000,
      },
      {
        round: 8,
        price: 29000,
      },
      {
        round: 11,
        price: 36500,
      },
    ],
    positions: ["GA", "GS"],
    club: "SWI",
    id: "1025018",
  },
  {
    id: "1028417",
    name: "Olivia Wilkinson",
    prices: [
      {
        round: 1,
        price: 30000,
      },
      {
        round: 5,
        price: 29000,
      },
      {
        round: 8,
        price: 29000,
      },
      {
        round: 11,
        price: 28500,
      },
    ],
    positions: ["GA", "GS"],
    club: "FEV",
  },
  {
    id: "1022294",
    name: "Lucy Austin",
    prices: [
      {
        round: 1,
        price: 27500,
      },
      {
        round: 5,
        price: 27500,
      },
      {
        round: 8,
        price: 25000,
      },
      {
        round: 11,
        price: 23000,
      },
    ],
    positions: ["GS"],
    club: "THU",
  },
  {
    id: "1029529",
    name: "Sophie Casey",
    prices: [
      {
        round: 1,
        price: 20000,
      },
      {
        round: 5,
        price: 18000,
      },
      {
        round: 8,
        price: 17500,
      },
      {
        round: 11,
        price: 17000,
      },
    ],
    positions: ["C", "WD"],
    club: "THU",
  },
  {
    id: "1034295",
    name: "Lily Graham",
    debutant: true,
    prices: [
      {
        round: 1,
        price: 20000,
      },
      {
        round: 5,
        price: 18500,
      },
      {
        round: 8,
        price: 17000,
      },
      {
        round: 11,
        price: 15500,
      },
    ],
    positions: ["GA", "GS"],
    club: "VIX",
  },
  {
    id: "80101",
    name: "Casey Kopua",
    prices: [
      {
        round: 11,
        price: 70000,
      },
    ],
    positions: ["GK"],
    club: "GIA",
  },
  {
    id: "1032618",
    name: "Kayla Graham",
    debutant: true,
    prices: [
      {
        round: 1,
        price: 20000,
      },
      {
        round: 5,
        price: 19000,
      },
      {
        round: 8,
        price: 17500,
      },
      {
        round: 11,
        price: 17000,
      },
    ],
    positions: ["GA", "WA"],
    club: "THU",
  },
  {
    name: "Monika 'Otai",
    debutant: true,
    prices: [
      {
        round: 1,
        price: 20000,
      },
    ],
    positions: ["GA", "GS"],
    club: "GIA",
    id: "654e",
  },
  {
    id: "1030765",
    name: "Grace Whyte",
    debutant: true,
    imageUrl:
      "https://netball.com.au/sites/netballnation/files/styles/player_headshot_440x440/public/2024-04/SSN-Player-Headshots-2024-Web-Swifts-White-Grace.png",
    prices: [
      {
        round: 1,
        price: 20000,
      },
      {
        round: 5,
        price: 19000,
      },
      {
        round: 8,
        price: 18000,
      },
      {
        round: 11,
        price: 17500,
      },
    ],
    positions: ["GA", "GS", "WA"],
    club: "SWI",
  },
  {
    id: "80830",
    name: "Shamera Sterling-Humphrey",
    prices: [
      {
        round: 1,
        price: 210000,
      },
    ],
    imageUrl:
      "https://netball.com.au/sites/netballnation/files/styles/player_headshot_440x440/public/2025-03/2025_SSN_Web_Headshot_THU_STIRLING-HUMPHREY_SHAMERA.png",
    positions: ["GK"],
    club: "THU",
    injuredRound: 4,
  },
  {
    id: "998404",
    name: "Sarah Klau",
    prices: [
      {
        round: 1,
        price: 165000,
      },
      {
        round: 5,
        price: 168500,
      },
      {
        round: 8,
        price: 175000,
      },
      {
        round: 11,
        price: 177000,
      },
    ],
    positions: ["GK", "GD"],
    club: "SWI",
  },
  {
    id: "1011747",
    name: "Jodi-Ann Ward",
    prices: [
      {
        round: 1,
        price: 145000,
      },
      {
        round: 5,
        price: 146500,
      },
    ],
    positions: ["WD", "GD"],
    club: "GIA",
  },
  {
    id: "1025020",
    name: "Ashleigh Ervin",
    prices: [
      {
        round: 1,
        price: 130000,
      },
      {
        round: 5,
        price: 135000,
      },
      {
        round: 8,
        price: 129500,
      },
      {
        round: 11,
        price: 125500,
      },
    ],
    imageUrl:
      "https://netball.com.au/sites/netballnation/files/styles/player_headshot_440x440/public/2024-09/ITS24_ERVIN.png",
    positions: ["GK"],
    club: "LIG",
  },
  {
    name: "Emily Mannix",
    prices: [
      {
        round: 1,
        price: 120000,
      },
    ],
    positions: ["GK", "GD"],
    club: "VIX",
    id: "7115",
  },
  {
    id: "1014130",
    name: "Sunday Aryang",
    prices: [
      {
        round: 1,
        price: 115000,
      },
      {
        round: 5,
        price: 110500,
      },
      {
        round: 8,
        price: 114000,
      },
      {
        round: 11,
        price: 116000,
      },
    ],
    positions: ["GD", "WD"],
    club: "FEV",
  },
  {
    id: "80343",
    name: "Courtney Bruce",
    imageUrl:
      "https://netball.com.au/sites/netballnation/files/styles/player_headshot_440x440/public/2025-03/2025_SSN_Web_Headshot_LIG_BRUCE_COURTNEY%20%281%29.png",
    prices: [
      {
        round: 1,
        price: 115000,
      },
      {
        round: 5,
        price: 116000,
      },
      {
        round: 8,
        price: 117000,
      },
      {
        round: 11,
        price: 121500,
      },
    ],
    positions: ["GK", "GD"],
    club: "LIG",
  },
  {
    id: "80577",
    name: "Jo Weston",
    prices: [
      {
        round: 1,
        price: 115000,
      },
      {
        round: 5,
        price: 117500,
      },
      {
        round: 8,
        price: 118500,
      },
      {
        round: 11,
        price: 123000,
      },
    ],
    positions: ["GD", "WD"],
    club: "VIX",
  },
  {
    id: "1007219",
    name: "Kim Brown",
    prices: [
      {
        round: 1,
        price: 105000,
      },
      {
        round: 5,
        price: 115000,
      },
      {
        round: 8,
        price: 112500,
      },
      {
        round: 11,
        price: 113500,
      },
    ],
    positions: ["GD", "GK"],
    club: "MAV",
  },
  {
    id: "1013638",
    name: "Matilda McDonnell",
    prices: [
      {
        round: 1,
        price: 105000,
      },
      {
        round: 5,
        price: 96500,
      },
      {
        round: 8,
        price: 88000,
      },
      {
        round: 11,
        price: 80000,
      },
    ],
    positions: ["GK", "GD"],
    club: "GIA",
  },
  {
    id: "1001920",
    name: "Kadie-Ann Dehaney",
    prices: [
      {
        round: 1,
        price: 95000,
      },
      {
        round: 5,
        price: 96000,
      },
      {
        round: 8,
        price: 94000,
      },
      {
        round: 11,
        price: 94000,
      },
    ],
    positions: ["GK"],
    club: "FEV",
  },
  {
    id: "1016035",
    name: "Ruby Bakewell-Doran",
    prices: [
      {
        round: 1,
        price: 95000,
      },
      {
        round: 5,
        price: 98000,
      },
      {
        round: 8,
        price: 102000,
      },
      {
        round: 11,
        price: 102000,
      },
    ],
    positions: ["GD", "GK"],
    club: "FIR",
  },
  {
    id: "1003784",
    name: "Maddy Turner",
    prices: [
      {
        round: 1,
        price: 85000,
      },
      {
        round: 5,
        price: 82500,
      },
      {
        round: 8,
        price: 81500,
      },
      {
        round: 11,
        price: 80500,
      },
    ],
    positions: ["GD", "GK"],
    club: "SWI",
  },
  {
    id: "1004510",
    name: "Olivia Lewis",
    prices: [
      {
        round: 1,
        price: 85000,
      },
      {
        round: 5,
        price: 83500,
      },
      {
        round: 8,
        price: 81000,
      },
      {
        round: 11,
        price: 78000,
      },
    ],
    positions: ["GK"],
    club: "MAV",
  },
  {
    id: "1014234",
    name: "Fran Williams",
    prices: [
      {
        round: 1,
        price: 85000,
      },
      {
        round: 5,
        price: 88500,
      },
      {
        round: 8,
        price: 86000,
      },
      {
        round: 11,
        price: 84500,
      },
    ],
    positions: ["GD", "GK"],
    club: "FEV",
  },
  {
    id: "1007301",
    name: "Matilda Garrett",
    prices: [
      {
        round: 1,
        price: 85000,
      },
      {
        round: 5,
        price: 88500,
      },
      {
        round: 8,
        price: 87500,
      },
      {
        round: 11,
        price: 86500,
      },
    ],
    positions: ["GD", "WD"],
    club: "THU",
  },
  {
    id: "1005495",
    name: "Rudi Ellis",
    prices: [
      {
        round: 1,
        price: 80000,
      },
      {
        round: 5,
        price: 75000,
      },
      {
        round: 8,
        price: 72000,
      },
      {
        round: 11,
        price: 70500,
      },
    ],
    positions: ["GK"],
    club: "VIX",
  },
  {
    id: "1006231",
    name: "Tara Hinchliffe",
    prices: [
      {
        round: 1,
        price: 80000,
      },
      {
        round: 5,
        price: 81500,
      },
      {
        round: 8,
        price: 85000,
      },
      {
        round: 11,
        price: 84000,
      },
    ],
    positions: ["GD", "WD"],
    club: "LIG",
  },
  {
    name: "Lauren Parkinson",
    prices: [
      {
        round: 1,
        price: 65000,
      },
    ],
    positions: ["GD", "GK"],
    club: "MAV",
    id: "791d",
  },
  {
    id: "1007299",
    name: "Teigan O'Shannassy",
    prices: [
      {
        round: 1,
        price: 50000,
      },
      {
        round: 5,
        price: 49500,
      },
      {
        round: 8,
        price: 48500,
      },
      {
        round: 11,
        price: 47000,
      },
    ],
    positions: ["GK", "GD"],
    club: "SWI",
  },
  {
    name: "Sanmarie Visser",
    prices: [
      {
        round: 1,
        price: 45000,
      },
      {
        round: 5,
        price: 42500,
      },
      {
        round: 8,
        price: 39000,
      },
      {
        round: 11,
        price: 36500,
      },
    ],
    positions: ["GK", "GD"],
    club: "THU",
    id: "1039161",
  },
  {
    id: "80473",
    name: "Verity Simmons",
    prices: [
      {
        round: 1,
        price: 75000,
      },
      {
        round: 5,
        price: 73500,
      },
      {
        round: 8,
        price: 70500,
      },
      {
        round: 11,
        price: 68500,
      },
    ],
    positions: ["WA", "C"],
    club: "SWI",
  },
  {
    id: "1029985",
    name: "Isabelle Shearer",
    prices: [
      {
        round: 1,
        price: 35000,
      },
      {
        round: 5,
        price: 35000,
      },
      {
        round: 8,
        price: 35000,
      },
      {
        round: 11,
        price: 34000,
      },
    ],
    positions: ["GD", "GK"],
    club: "FIR",
  },
  {
    id: "993358",
    name: "Kristiana Manu’a",
    prices: [
      {
        round: 1,
        price: 35000,
      },
      {
        round: 5,
        price: 33000,
      },
      {
        round: 8,
        price: 30500,
      },
      {
        round: 11,
        price: 28000,
      },
    ],
    positions: ["WD", "GD"],
    club: "LIG",
  },
  {
    id: "1007302",
    name: "Sharni Lambden",
    prices: [
      {
        round: 1,
        price: 30000,
      },
      {
        round: 5,
        price: 30500,
      },
      {
        round: 8,
        price: 30000,
      },
      {
        round: 11,
        price: 29000,
      },
    ],
    positions: ["WD", "GD"],
    club: "SWI",
  },
  {
    id: "1028096",
    name: "Erin O’Brien",
    prices: [
      {
        round: 1,
        price: 30000,
      },
      {
        round: 5,
        price: 30000,
      },
      {
        round: 8,
        price: 29500,
      },
      {
        round: 11,
        price: 31500,
      },
    ],
    positions: ["GK"],
    club: "GIA",
  },
  {
    id: "1034270",
    name: "Ashlee Barnett",
    prices: [
      {
        round: 1,
        price: 20000,
      },
      {
        round: 5,
        price: 18500,
      },
      {
        round: 8,
        price: 17000,
      },
      {
        round: 11,
        price: 15500,
      },
    ],
    positions: ["GK"],
    club: "FIR",
  },
  {
    id: "1027543",
    name: "Maggie Caris",
    prices: [
      {
        round: 1,
        price: 20000,
      },
      {
        round: 5,
        price: 19000,
      },
      {
        round: 8,
        price: 17500,
      },
      {
        round: 11,
        price: 16000,
      },
    ],
    positions: ["GD", "GK"],
    club: "VIX",
  },
  {
    id: "1027555",
    name: "Ruth Aryang",
    prices: [
      {
        round: 1,
        price: 20000,
      },
    ],
    positions: ["GD", "GK"],
    club: "FEV",
  },
  {
    id: "994224",
    name: "Liz Watson",
    prices: [
      {
        round: 1,
        price: 215000,
      },
      {
        round: 5,
        price: 228000,
      },
      {
        round: 8,
        price: 205000,
      },
      {
        round: 11,
        price: 271000,
      },
    ],
    positions: ["WA", "C"],
    club: "LIG",
  },
  {
    id: "80701",
    name: "Jamie-Lee price",
    prices: [
      {
        round: 1,
        price: 205000,
      },
      {
        round: 5,
        price: 217500,
      },
      {
        round: 8,
        price: 232500,
      },
      {
        round: 11,
        price: 246500,
      },
    ],
    positions: ["C", "WA"],
    club: "GIA",
  },
  {
    id: "991901",
    name: "Kate Moloney",
    prices: [
      {
        round: 1,
        price: 180000,
      },
      {
        round: 5,
        price: 185000,
      },
      {
        round: 8,
        price: 187500,
      },
      {
        round: 11,
        price: 191500,
      },
    ],
    positions: ["WD", "C"],
    club: "VIX",
  },
  {
    id: "1019205",
    name: "Latanya Wilson",
    prices: [
      {
        round: 1,
        price: 165000,
      },
      {
        round: 5,
        price: 175000,
      },
      {
        round: 8,
        price: 198000,
      },
      {
        round: 11,
        price: 210000,
      },
    ],
    positions: ["WD", "GD"],
    club: "THU",
  },
  {
    id: "1015271",
    name: "Georgie Horjus",
    prices: [
      {
        round: 1,
        price: 160000,
      },
      {
        round: 5,
        price: 173000,
      },
      {
        round: 8,
        price: 178000,
      },
      {
        round: 188500,
        price: 266000,
      },
    ],
    positions: ["WA", "GA"],
    club: "THU",
  },
  {
    id: "999806",
    name: "Hannah Petty",
    prices: [
      {
        round: 1,
        price: 65000,
      },
      {
        round: 5,
        price: 64500,
      },
      {
        round: 8,
        price: 65000,
      },
      {
        round: 11,
        price: 66000,
      },
    ],
    positions: ["WD", "C"],
    club: "THU",
  },
  {
    id: "1034275",
    name: "Hope White",
    prices: [
      {
        round: 1,
        price: 20000,
      },
      {
        round: 5,
        price: 20000,
      },
      {
        round: 8,
        price: 19000,
      },
      {
        round: 11,
        price: 17000,
      },
    ],
    positions: ["C", "WA"],
    club: "GIA",
  },
  {
    id: "1001356",
    name: "Amy Parmenter",
    prices: [
      {
        round: 1,
        price: 155000,
      },
      {
        round: 5,
        price: 164000,
      },
      {
        round: 8,
        price: 163000,
      },
      {
        round: 11,
        price: 168000,
      },
    ],
    positions: ["WD"],
    club: "MAV",
  },
  {
    id: "1022764",
    name: "Amy Sligar",
    prices: [
      {
        round: 1,
        price: 60000,
      },
      {
        round: 5,
        price: 60500,
      },
      {
        round: 8,
        price: 61000,
      },
      {
        round: 11,
        price: 63500,
      },
    ],
    positions: ["WD", "C"],
    club: "GIA",
  },
  {
    id: "1004473",
    name: "Molly Jovic",
    prices: [
      {
        round: 1,
        price: 140000,
      },
      {
        round: 5,
        price: 137000,
      },
      {
        round: 8,
        price: 138500,
      },
      {
        round: 11,
        price: 149500,
      },
    ],
    positions: ["C", "WA"],
    club: "MAV",
  },
  {
    id: "1020223",
    name: "Tayla Williams",
    prices: [
      {
        round: 1,
        price: 140000,
      },
      {
        round: 5,
        price: 143000,
      },
      {
        round: 8,
        price: 146000,
      },
      {
        round: 11,
        price: 141500,
      },
    ],
    positions: ["WA", "C"],
    club: "THU",
  },
  {
    id: "1015274",
    name: "Macy Gardner",
    prices: [
      {
        round: 1,
        price: 135000,
      },
      {
        round: 5,
        price: 144500,
      },
      {
        round: 8,
        price: 147500,
      },
      {
        round: 11,
        price: 159500,
      },
    ],
    positions: ["C", "WA"],
    club: "FIR",
  },
  {
    name: "Leesa Mi Mi",
    prices: [
      {
        round: 1,
        price: 135000,
      },
      {
        round: 5,
        price: 133500,
      },
      {
        round: 8,
        price: 137500,
      },
      {
        round: 11,
        price: 143000,
      },
    ],
    positions: ["WA", "C"],
    club: "LIG",
    id: "1029514",
  },
  {
    id: "1004472",
    name: "Lara Dunkley",
    imageUrl:
      "https://netball.com.au/sites/netballnation/files/styles/player_headshot_440x440/public/2025-03/2025_SSN_Web_Headshot_FIR_DUNKLEY_LARA%20%281%29.png",
    prices: [
      {
        round: 1,
        price: 135000,
      },
      {
        round: 5,
        price: 135000,
      },
      {
        round: 8,
        price: 139000,
      },
      {
        round: 11,
        price: 136000,
      },
    ],
    positions: ["WA", "C"],
    club: "FIR",
  },
  {
    id: "80574",
    name: "Paige Hadley",
    imageUrl:
      "https://netball.com.au/sites/netballnation/files/styles/player_headshot_440x440/public/2025-03/2025_SSN_Web_Headshot_SWI_HADLEY_PAIDE.png",
    prices: [
      {
        round: 1,
        price: 125000,
      },
      {
        round: 5,
        price: 131500,
      },
      {
        round: 8,
        price: 138000,
      },
      {
        round: 11,
        price: 145000,
      },
    ],
    positions: ["WA", "C"],
    club: "SWI",
  },
  {
    id: "995217",
    name: "Maddie Hay",
    prices: [
      {
        round: 1,
        price: 120000,
      },
      {
        round: 5,
        price: 121000,
      },
      {
        round: 8,
        price: 123500,
      },
      {
        round: 11,
        price: 131000,
      },
    ],
    positions: ["WA", "C"],
    club: "GIA",
  },
  {
    id: "1022297",
    name: "Hannah Mundy",
    prices: [
      {
        round: 1,
        price: 115000,
      },
      {
        round: 5,
        price: 122000,
      },
      {
        round: 8,
        price: 132000,
      },
      {
        round: 11,
        price: 134500,
      },
    ],
    injuredRound: 12,
    positions: ["WA", "C"],
    club: "VIX",
  },
  {
    id: "998408",
    name: "Jess Anstiss",
    prices: [
      {
        round: 1,
        price: 110000,
      },
      {
        round: 5,
        price: 111000,
      },
      {
        round: 8,
        price: 109000,
      },
      {
        round: 11,
        price: 104500,
      },
    ],
    positions: ["WD", "C"],
    club: "FEV",
  },
  {
    id: "1016601",
    name: "Imogen Allison",
    prices: [
      {
        round: 1,
        price: 110000,
      },
      {
        round: 5,
        price: 110000,
      },
      {
        round: 8,
        price: 111000,
      },
      {
        round: 11,
        price: 112000,
      },
    ],
    positions: ["WA", "C", "WD"],
    club: "FIR",
  },
  {
    id: "1014127",
    name: "Allie Smith",
    prices: [
      {
        round: 1,
        price: 45000,
      },
      {
        round: 5,
        price: 42000,
      },
      {
        round: 8,
        price: 40500,
      },
      {
        round: 11,
        price: 37500,
      },
    ],
    positions: ["WD", "C"],
    club: "SWI",
  },
  {
    id: "1033807",
    name: "Hulita Veve",
    prices: [
      {
        round: 1,
        price: 95000,
      },
      {
        round: 5,
        price: 95000,
      },
      {
        round: 8,
        price: 94000,
      },
      {
        round: 11,
        price: 94000,
      },
    ],
    positions: ["WD", "C"],
    club: "FIR",
  },
  {
    id: "1016033",
    name: "Maisie Nankivell",
    prices: [
      {
        round: 1,
        price: 85000,
      },
      {
        round: 5,
        price: 86500,
      },
      {
        round: 8,
        price: 84000,
      },
      {
        round: 11,
        price: 79000,
      },
    ],
    positions: ["WD", "C"],
    club: "MAV",
  },
  {
    id: "1000831",
    name: "Mahalia Cassidy",
    prices: [
      {
        round: 1,
        price: 85000,
      },
      {
        round: 5,
        price: 86000,
      },
      {
        round: 8,
        price: 87500,
      },
      {
        round: 11,
        price: 86000,
      },
    ],
    positions: ["WD", "C"],
    club: "LIG",
  },
  {
    id: "1034300",
    name: "Zara Walters",
    prices: [
      {
        round: 1,
        price: 80000,
      },
      {
        round: 5,
        price: 75000,
      },
      {
        round: 8,
        price: 70500,
      },
      {
        round: 11,
        price: 67500,
      },
    ],
    positions: ["WA", "C"],
    club: "VIX",
  },
  {
    id: "1009742",
    name: "Tayla Fraser",
    prices: [
      {
        round: 1,
        price: 75000,
      },
      {
        round: 5,
        price: 76500,
      },
      {
        round: 8,
        price: 78000,
      },
      {
        round: 11,
        price: 79000,
      },
    ],
    positions: ["WA", "C", "WD"],
    club: "MAV",
  },
  {
    id: "1001701",
    name: "Kate Eddy",
    imageUrl:
      "https://netball.com.au/sites/netballnation/files/styles/player_headshot_440x440/public/2025-03/2025_SSN_Web_Headshot_VIX_EDDY_KATE.png",
    prices: [
      {
        round: 1,
        price: 75000,
      },
      {
        round: 5,
        price: 76500,
      },
      {
        round: 8,
        price: 76500,
      },
      {
        round: 11,
        price: 76500,
      },
    ],
    positions: ["WD", "GD"],
    club: "VIX",
  },
];

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function seedUsers() {
  // await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  // await sql`
  //   CREATE TABLE IF NOT EXISTS users (
  //     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  //     name VARCHAR(255) NOT NULL,
  //     email TEXT NOT NULL UNIQUE,
  //     password TEXT NOT NULL
  //   );
  // `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

async function seedPlayers() {
  await sql`
    DO $$
    BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'club_type') THEN
        CREATE TYPE club_type AS ENUM (
          'SWI', 'VIX', 'LIG', 'FEV', 'GIA', 'FIR', 'MAV', 'THU'
        );
      END IF;
    END$$;
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS players (
      id TEXT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      positions JSON NOT NULL,
      club club_type NOT NULL,
      image_url VARCHAR(255)

    );
  `;

  const insertedPlayers = await Promise.all(
    players.map(async (player) => {
      console.log(player);

      return sql`
        INSERT INTO players (id, name, positions, club, image_url)
        VALUES (${player.id}, ${player.name}, ${player.positions}, ${
        player.club
      }, ${player.imageUrl ?? null})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedPlayers;
}

// async function seedInvoices() {
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await sql`
//     CREATE TABLE IF NOT EXISTS invoices (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       customer_id UUID NOT NULL,
//       amount INT NOT NULL,
//       status VARCHAR(255) NOT NULL,
//       date DATE NOT NULL
//     );
//   `;

//   const insertedInvoices = await Promise.all(
//     invoices.map(
//       (invoice) => sql`
//         INSERT INTO invoices (customer_id, amount, status, date)
//         VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
//         ON CONFLICT (id) DO NOTHING;
//       `
//     )
//   );

//   return insertedInvoices;
// }

// async function seedCustomers() {
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await sql`
//     CREATE TABLE IF NOT EXISTS customers (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email VARCHAR(255) NOT NULL,
//       image_url VARCHAR(255) NOT NULL
//     );
//   `;

//   const insertedCustomers = await Promise.all(
//     customers.map(
//       (customer) => sql`
//         INSERT INTO customers (id, name, email, image_url)
//         VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
//         ON CONFLICT (id) DO NOTHING;
//       `
//     )
//   );

//   return insertedCustomers;
// }

// async function seedRevenue() {
//   await sql`
//     CREATE TABLE IF NOT EXISTS revenue (
//       month VARCHAR(4) NOT NULL UNIQUE,
//       revenue INT NOT NULL
//     );
//   `;

//   const insertedRevenue = await Promise.all(
//     revenue.map(
//       (rev) => sql`
//         INSERT INTO revenue (month, revenue)
//         VALUES (${rev.month}, ${rev.revenue})
//         ON CONFLICT (month) DO NOTHING;
//       `
//     )
//   );

//   return insertedRevenue;
// }

async function getDuplicateId() {
  const duplicate = await sql`SELECT id, COUNT(id)
FROM players
GROUP BY id
HAVING COUNT(id) > 0;`;
  console.log(duplicate);
}

export async function GET() {
  try {
    await sql.begin(() => [
      getDuplicateId(),
      // seedPlayers(),
      // seedCustomers(),
      // seedInvoices(),
      // seedRevenue(),
    ]);

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
