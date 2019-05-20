import {Component, OnDestroy, OnInit} from '@angular/core';
import {FirstQueryResultSample} from '../../../model/first.query.result.sample';
import {QueriesService} from '../../../shared/services/queries.service';
import {query} from '@angular/animations';
import {FirstQueryResultSampleRepresentation} from './model/first-query-result-sample-representation';
import {ThirdQueryResultSample} from '../../../model/third.query.result.sample';
import {ThirdQueryResultSampleRepresentation} from '../third/model/third-query-result-sample-representation';
import {Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-first-query-page',
  templateUrl: './first-query-page.component.html',
  styleUrls: ['./first-query-page.component.scss']
})
export class FirstQueryPageComponent implements OnInit, OnDestroy {

  private resultsStickyHeader = true;
  private withFilter = true;
  private headerFields = ['year', 'city', 'country'];
  private dataSourceSub: Subscription;
  private dataSourceMap: FirstQueryResultSampleRepresentation[];
  private dataSource: MatTableDataSource<FirstQueryResultSampleRepresentation>;


  constructor(private queryService: QueriesService) { }

  ngOnInit() {
    this.dataSourceSub = this.queryService.getFirstQueryResults().subscribe((results) =>
      this.dataSource.data = this.mapResults(results)
    );

    this.dataSource = new MatTableDataSource(this.dataSourceMap);
  }

  ngOnDestroy(): void {
    this.dataSourceSub.unsubscribe();
  }

  mapResults(results: FirstQueryResultSample[]): FirstQueryResultSampleRepresentation[] {
    return results.map(
      result => {
        return {
          year: result.year,
          country: result.city.country,
          city: result.city.name,
        };
      }
    );
  }

}
