import {Component, OnDestroy, OnInit} from '@angular/core';
import {FirstQueryResultSample} from '../../../model/first.query.result.sample';
import {ThirdQueryResultSample} from '../../../model/third.query.result.sample';
import {ThirdQueryResultSampleRepresentation} from './model/third-query-result-sample-representation';
import {forEach} from '@angular/router/src/utils/collection';
import {MatTableDataSource} from '@angular/material';
import {FirstQueryResultSampleRepresentation} from '../first/model/first-query-result-sample-representation';
import {Subscription} from 'rxjs';
import {QueriesService} from '../../../shared/services/queries.service';

@Component({
  selector: 'app-third-query-page',
  templateUrl: './third-query-page.component.html',
  styleUrls: ['./third-query-page.component.scss']
})
export class ThirdQueryPageComponent implements OnInit, OnDestroy {

  resultsStickyHeader = true;
  dataFields = ['country', 'city', 'new_position', 'new_value', 'old_position', 'old_value'];
  headerFields: string[];
  dataSourceSub: Subscription;
  dataSourceMap: ThirdQueryResultSampleRepresentation[];
  dataSource: MatTableDataSource<ThirdQueryResultSampleRepresentation>;

  constructor(private queryService: QueriesService) {
  }

  ngOnInit() {
    this.dataSourceSub = this.queryService.getThirdQueryResults().subscribe((results) =>
      this.dataSource.data = this.mapResults(results)
    );

    this.dataSource = new MatTableDataSource(this.dataSourceMap);
    this.headerFields = this.replaceHeader(this.dataFields, new RegExp('new_', 'g'), '2017 ');
    this.headerFields = this.replaceHeader(this.headerFields, new RegExp('old_', 'g'), '2016 ');
  }

  ngOnDestroy(): void {
    this.dataSourceSub.unsubscribe();
  }

  mapResults(results: ThirdQueryResultSample[]): ThirdQueryResultSampleRepresentation[] {
    return results.map(
      result => {
        return {
          country: result.country, city: result.city,
          new_position: result.newRank.position, new_value: result.newRank.value,
          old_position: result.oldRank.position, old_value: result.oldRank.value
        };
      });
  }

  replaceHeader(strings: string[], regex: RegExp, replaceValue: string): string[] {
    return strings.map(
      str => {
        return str.replace(regex, replaceValue);
      }
    );
  }

}
