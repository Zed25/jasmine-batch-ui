import { Component, OnInit } from '@angular/core';
import {FirstQueryResultSample} from '../../../model/first.query.result.sample';
import {ThirdQueryResultSample} from '../../../model/third.query.result.sample';
import {ThirdQueryResultSampleRepresentation} from './model/ThirdQueryResultSampleRepresentation';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-third-query-page',
  templateUrl: './third-query-page.component.html',
  styleUrls: ['./third-query-page.component.scss']
})
export class ThirdQueryPageComponent implements OnInit {

  resultsStickyHeader = true;
  displayedColumns = ['country', 'city', 'new_position', 'new_value', 'old_position', 'old_value'];
  rowDataSource: ThirdQueryResultSample[] = [
    {country: 'Israel', city: 'Beersheba', newChart: {position: 2, value: 14.907187993279422},
      oldChart: {position: 1, value: 14.065295122896487}},
    {country: 'Israel', city: 'Beersheba', newChart: {position: 2, value: 14.907187993279422},
      oldChart: {position: 1, value: 14.065295122896487}},
    {country: 'Israel', city: 'Beersheba', newChart: {position: 2, value: 14.907187993279422},
      oldChart: {position: 1, value: 14.065295122896487}},
    {country: 'Israel', city: 'Beersheba', newChart: {position: 2, value: 14.907187993279422},
      oldChart: {position: 1, value: 14.065295122896487}},
    {country: 'Israel', city: 'Beersheba', newChart: {position: 2, value: 14.907187993279422},
      oldChart: {position: 1, value: 14.065295122896487}},
    {country: 'Israel', city: 'Beersheba', newChart: {position: 2, value: 14.907187993279422},
      oldChart: {position: 1, value: 14.065295122896487}},
    {country: 'Israel', city: 'Beersheba', newChart: {position: 2, value: 14.907187993279422},
      oldChart: {position: 1, value: 14.065295122896487}},
    {country: 'Israel', city: 'Beersheba', newChart: {position: 2, value: 14.907187993279422},
      oldChart: {position: 1, value: 14.065295122896487}}
  ];

  dataSource: ThirdQueryResultSampleRepresentation[] = this.rowDataSource.map(
    data => {
      return {
        country: data.country, city: data.city,
        new_position: data.newChart.position, new_value: data.newChart.value,
        old_position: data.oldChart.position, old_value: data.oldChart.value
      };
    });

  constructor() { }

  ngOnInit() {
  }

}
