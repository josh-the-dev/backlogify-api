export interface User {
  id: number;
  username: string;
  password: string;
}

export interface Backlog {
  id: number;
  name: string;
  backlogGames: Game[];
}

export interface Game {
  id: number;
  name: string;
  genres: Genre[];
  platforms: Platform[];
}

export type Genre = string;

export type Platform = string;
