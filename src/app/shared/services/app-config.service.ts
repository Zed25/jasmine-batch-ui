import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private readonly env;
  private readonly config;

  constructor() {
    this.env = environment;
    this.config = environment.config;
  }

  getConfig() {
    return this.config;
  }

  getEnv(key: any) {
    return this.env[key];
  }
}
