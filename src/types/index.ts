export interface User {
  id: number;
  username: string;
  password: string;
}

export interface Backlog {
  id?: number;
  name: string;
  order: number;
  games: BacklogGame[];
}

export interface BacklogGame {
  id?: number;
  name: string;
  backlog_id?: number;
}

export interface Game {
  id: number;
  name: string;
  genres: Genre[];
  platforms: Platform[];
  cover: { id: number; url: string };
}

export type Genre = string;

export type Platform = string;
