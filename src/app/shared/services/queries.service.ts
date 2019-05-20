import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from './app-config.service';
import {FirstQueryResultSample} from '../../model/first.query.result.sample';
import {SecondQueryResultSample} from '../../model/second.query.result.sample';
import {ThirdQueryResultSample} from '../../model/third.query.result.sample';

@Injectable({
  providedIn: 'root'
})
export class QueriesService {
  private config: any;
  private readonly apiEndpoint: string;
  private readonly apiVersion: string;

  constructor(private http: HttpClient,
              private configService: AppConfigService) {
    this.config = this.configService.getConfig();
    this.apiEndpoint = `${this.config.api.protocol}${this.config.api.hostname}`;
    this.apiVersion = `${this.config.api.version}`;
  }

  getFirstQueryResults() {
    return this.http.get<FirstQueryResultSample[]>(
      `${this.apiEndpoint}:${this.config.api.services.query.port}/${this.apiVersion}/queries/first`);
  }

  getSecondQueryResults(metricsType: String) {
    return this.http.get<SecondQueryResultSample[]>(
      `${this.apiEndpoint}:${this.config.api.services.query.port}/${this.apiVersion}/queries/second/${metricsType}`);
  }

  getThirdQueryResults() {
    return this.http.get<ThirdQueryResultSample[]>(
      `${this.apiEndpoint}:${this.config.api.services.query.port}/${this.apiVersion}/queries/third`);
  }
}
