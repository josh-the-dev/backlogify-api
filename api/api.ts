import axios, { AxiosInstance } from 'axios';
import config from '../config';

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
  async getGames(): Promise<string> {
    const gameResponse = await this.client.post('/games');

    return gameResponse.data;
  }
}

export default new ApiClient(config.igdbApiKey);
