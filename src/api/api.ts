import axios, { AxiosInstance } from 'axios';
import config from '../config';
import { Game, Genre } from '../modules/games/games.model';

class ApiClient {
  constructor(apiToken: string | undefined) {
    this.client = axios.create({
      baseURL: 'https://api-v3.igdb.com/',
      headers: {
        Accept: 'application/json',
        'user-key': apiToken,
      },
    });
  }
  private client: AxiosInstance;

  // Sort out response type
  async getGames(gameName: string): Promise<RequestGameResponse> {
    const gameResponse = await this.client.post(
      '/games',
      `fields genres, name, platforms; limit 10; search "${gameName}";`
    );
    console.log(gameResponse.data);
    return gameResponse.data;
  }
}

export interface RequestGameResponse {
  Games: Game[];
}

export const genreMapping: Record<Genre, number> = {
  Simulator: 13,
  Tactical: 24,
  'Quiz/Trivia': 26,
  Fighting: 4,
  Strategy: 15,
  Adventure: 31,
  'Role-playing (RPG)': 12,
  Shooter: 5,
  Music: 7,
  Indie: 32,
  'Turn-based strategy (TBS)': 16,
  Pinball: 30,
  Puzzle: 9,
  'Real Time Strategy (RTS)': 11,
  "Hack and slash/Beat 'em up": 25,
  'Visual Novel': 34,
  Platform: 8,
  Racing: 10,
  Sport: 14,
  Arcade: 33,
  'Point-and-click': 2,
};

export default new ApiClient(config.igdbApiKey);
