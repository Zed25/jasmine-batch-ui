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
  dataFields = ['country', 'city', 'new_position', 'new_value', 'old_position', 'old_value'];
  headerFields: string[];
  rowDataSource: ThirdQueryResultSample[] = [
    {country: 'Israel', city: 'Beersheba', newRank: {position: 2, value: 14.907187993279422},
      oldRank: {position: 1, value: 14.065295122896487}},
    {country: 'Israel', city: 'Beersheba', newRank: {position: 2, value: 14.907187993279422},
      oldRank: {position: 1, value: 14.065295122896487}},
    {country: 'Israel', city: 'Beersheba', newRank: {position: 2, value: 14.907187993279422},
      oldRank: {position: 1, value: 14.065295122896487}},
    {country: 'Israel', city: 'Beersheba', newRank: {position: 2, value: 14.907187993279422},
      oldRank: {position: 1, value: 14.065295122896487}},
    {country: 'Israel', city: 'Beersheba', newRank: {position: 2, value: 14.907187993279422},
      oldRank: {position: 1, value: 14.065295122896487}},
    {country: 'Israel', city: 'Beersheba', newRank: {position: 2, value: 14.907187993279422},
      oldRank: {position: 1, value: 14.065295122896487}},
    {country: 'Israel', city: 'Beersheba', newRank: {position: 2, value: 14.907187993279422},
      oldRank: {position: 1, value: 14.065295122896487}},
    {country: 'Israel', city: 'Beersheba', newRank: {position: 2, value: 14.907187993279422},
      oldRank: {position: 1, value: 14.065295122896487}}
  ];

  dataSource: ThirdQueryResultSampleRepresentation[];

  constructor() {
    this.dataSource = this.mapResults(this.rowDataSource);
    this.headerFields = this.replaceHeader(this.dataFields, new RegExp('new_', 'g'), '2017 ');
    this.headerFields = this.replaceHeader(this.headerFields, new RegExp('old_', 'g'), '2016 ');
  }

  ngOnInit() {
  }

  mapResults(thirdQueryResultSample: ThirdQueryResultSample[]): ThirdQueryResultSampleRepresentation[] {
    return thirdQueryResultSample.map(
      data => {
        return {
          country: data.country, city: data.city,
          new_position: data.newRank.position, new_value: data.newRank.value,
          old_position: data.oldRank.position, old_value: data.oldRank.value
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
