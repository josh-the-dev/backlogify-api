export interface Game {
  id: number;
  name: string;
  genres: Genre[];
  platforms: Platform[];
}

export type Genre = string;

export type Platform = string;
