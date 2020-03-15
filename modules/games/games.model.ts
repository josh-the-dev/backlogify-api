export interface Game {
  id: number;
  name: string;
  genres: Genre[];
  platforms: Platform[];
}

export type Genre = 'RPG' | 'FPS';

export type Platform = 'PC' | 'PS4' | 'Nintendo Switch';
