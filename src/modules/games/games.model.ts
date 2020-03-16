export interface Game {
  id: number;
  name: string;
  genres: Genre[];
  platforms: Platform[];
}

export type Genre =
  | 'Simulator'
  | 'Tactical'
  | 'Quiz/Trivia'
  | 'Fighting'
  | 'Strategy'
  | 'Adventure'
  | 'Role-playing (RPG)'
  | 'Shooter'
  | 'Music'
  | 'Indie'
  | 'Turn-based strategy (TBS)'
  | 'Pinball'
  | 'Puzzle'
  | 'Real Time Strategy (RTS)'
  | "Hack and slash/Beat 'em up"
  | 'Visual Novel'
  | 'Platform'
  | 'Racing'
  | 'Sport'
  | 'Arcade'
  | 'Point-and-click';

export type Platform = 'PC' | 'PS4' | 'Nintendo Switch';
