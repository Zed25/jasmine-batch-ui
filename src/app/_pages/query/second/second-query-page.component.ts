import {Component, OnDestroy, OnInit} from '@angular/core';
import {FirstQueryResultSample} from '../../../model/first.query.result.sample';
import {SecondQueryResultSample} from '../../../model/second.query.result.sample';
import {MatTableDataSource} from '@angular/material';
import {FirstQueryResultSampleRepresentation} from '../first/model/first-query-result-sample-representation';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {QueriesService} from '../../../shared/services/queries.service';
import {SecondQueryResultSampleRepresentation} from './model/second-query-result-sample-representation';

@Component({
  selector: 'app-second-query-page',
  templateUrl: './second-query-page.component.html',
  styleUrls: ['./second-query-page.component.scss']
})
export class SecondQueryPageComponent implements OnInit, OnDestroy {

  private _type: Subscription;
  private type: string;
  resultsStickyHeader = true;
  headerFields = ['year', 'month', 'country', 'mean', 'stdev', 'min', 'max'];
  dataSourceSub: Subscription;
  dataSourceMap: SecondQueryResultSampleRepresentation[];
  dataSource: MatTableDataSource<SecondQueryResultSampleRepresentation>;

  constructor(private route: ActivatedRoute,
              private queryService: QueriesService) { }

  ngOnInit() {
    this.initialize();
  }

  private initialize() {
    this._type = this.route.params.subscribe(params => {
        this.type = params['term'];
        this.dataSourceSub = this.queryService.getSecondQueryResults(this.type).subscribe((results) =>
          this.dataSource.data = this.mapResults(results)
        );
      }
    );

    this.dataSource = new MatTableDataSource(this.dataSourceMap);
  }

  ngOnDestroy(): void {
    this.dataSourceSub.unsubscribe();
    this._type.unsubscribe();
  }

  mapResults(results: SecondQueryResultSample[]): SecondQueryResultSampleRepresentation[] {
    return results.map(
      result => {
        return new SecondQueryResultSampleRepresentation(
          result.year,
          result.month - 1,
          result.country,
          result.metrics.mean,
          result.metrics.stdev,
          result.metrics.min,
          result.metrics.max
        );
      }
    );
  }

}
