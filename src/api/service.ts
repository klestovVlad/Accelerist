import axios, { AxiosInstance } from 'axios';

export const baseUrl = 'https://accelerist.herokuapp.com';
// import store from '../store/root-reducer';

class ApiWithoutToken {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  get instance(): AxiosInstance {
    return this.api;
  }

  async post(url: string, data?: any) {
    return this.api.post(url, data);
  }

  async get(url: string) {
    return this.api.get(url);
  }

  async put(url: string, data?: any) {
    return this.api.put(url, data);
  }

  async delete(url: string, data?: any) {
    return this.api.delete(url, data);
  }
}

export const ApiAuthorization = new ApiWithoutToken();
