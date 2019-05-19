import { Component, OnInit } from '@angular/core';
import {FirstQueryResultSample} from '../../../model/first.query.result.sample';

@Component({
  selector: 'app-first-query-page',
  templateUrl: './first-query-page.component.html',
  styleUrls: ['./first-query-page.component.scss']
})
export class FirstQueryPageComponent implements OnInit {
  resultsStickyHeader = true;
  headerFields = ['year', 'city'];
  dataSource: FirstQueryResultSample[] = [
    {year: '2017', city: 'Phoenix'},
    {year: '2013', city: 'Las Vegas'},
    {year: '2016', city: 'Phoenix'},
    {year: '2017', city: 'Eilat'},
    {year: '2013', city: 'Eilat'},
    {year: '2016', city: 'Las Vegas'},
    {year: '2014', city: 'Las Vegas'},
    {year: '2017', city: 'Las Vegas'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
