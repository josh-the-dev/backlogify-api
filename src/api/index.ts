import axios, { AxiosInstance } from 'axios';
import config from '../../config';
import { Game } from 'src/types';

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
      `fields genres, name, platforms, cover.url; limit 10; search "${gameName}";`
    );
    return gameResponse.data;
  }

  async getPlatforms(id: string): Promise<string> {
    const response = await this.client.post(
      '/platforms',
      `fields name; where id = ${id}`
    );

    return response.data;
  }
}

export type RequestGameResponse = Game[];

export default new ApiClient(config.igdbApiKey);
