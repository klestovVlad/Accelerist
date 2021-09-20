import axios, { AxiosInstance } from 'axios';

// eslint-disable-next-line import/no-cycle
import store from '../store/root-reducer';

export const baseUrl = 'https://accelerist.herokuapp.com';

class Api {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.api.interceptors.request.use((config) => {
      const { accessToken } = store.store.getState().userReducer;
      if (accessToken !== null) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
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

export default new Api();
