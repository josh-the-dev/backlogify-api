import { Game } from '../games/games.model';

export interface Backlog {
  id: number;
  name: string;
  backlogGames: Game[];
}
