import { Component, OnInit } from '@angular/core';
import {FirstQueryResultSample} from '../../../model/first.query.result.sample';
import {SecondQueryResultSample} from '../../../model/second.query.result.sample';

@Component({
  selector: 'app-second-query-page',
  templateUrl: './second-query-page.component.html',
  styleUrls: ['./second-query-page.component.scss']
})
export class SecondQueryPageComponent implements OnInit {

  resultsStickyHeader = true;
  displayedColumns = ['year', 'month', 'country', 'mean', 'stdev', 'min', 'max'];
  temperatureColumns = this.displayedColumns;
  humidityColumns = this.displayedColumns;
  pressureColumns = this.displayedColumns;
  temperatureDataSource: SecondQueryResultSample[] = [
    {year: '2016', month: '7', country: 'Israel', mean: 302.24179479227286, stdev: 4.095820971556662, min: 288.325, max: 315.77},
    {year: '2016', month: '7', country: 'Israel', mean: 302.24179479227286, stdev: 4.095820971556662, min: 288.325, max: 315.77},
    {year: '2016', month: '7', country: 'Israel', mean: 302.24179479227286, stdev: 4.095820971556662, min: 288.325, max: 315.77},
    {year: '2016', month: '7', country: 'Israel', mean: 302.24179479227286, stdev: 4.095820971556662, min: 288.325, max: 315.77},
    {year: '2016', month: '7', country: 'Israel', mean: 302.24179479227286, stdev: 4.095820971556662, min: 288.325, max: 315.77},
    {year: '2016', month: '7', country: 'Israel', mean: 302.24179479227286, stdev: 4.095820971556662, min: 288.325, max: 315.77},
    {year: '2016', month: '7', country: 'Israel', mean: 302.24179479227286, stdev: 4.095820971556662, min: 288.325, max: 315.77},
    {year: '2016', month: '7', country: 'Israel', mean: 302.24179479227286, stdev: 4.095820971556662, min: 288.325, max: 315.77}
  ];

  humidityDataSource: SecondQueryResultSample[] = [
    {year: '2016', month: '7', country: 'Israel', mean: 73.66375448028666, stdev: 22.011993184816205, min: 10.0, max: 100.0},
    {year: '2016', month: '7', country: 'Israel', mean: 73.66375448028666, stdev: 22.011993184816205, min: 10.0, max: 100.0},
    {year: '2016', month: '7', country: 'Israel', mean: 73.66375448028666, stdev: 22.011993184816205, min: 10.0, max: 100.0},
    {year: '2016', month: '7', country: 'Israel', mean: 73.66375448028666, stdev: 22.011993184816205, min: 10.0, max: 100.0},
    {year: '2016', month: '7', country: 'Israel', mean: 73.66375448028666, stdev: 22.011993184816205, min: 10.0, max: 100.0},
    {year: '2016', month: '7', country: 'Israel', mean: 73.66375448028666, stdev: 22.011993184816205, min: 10.0, max: 100.0},
    {year: '2016', month: '7', country: 'Israel', mean: 73.66375448028666, stdev: 22.011993184816205, min: 10.0, max: 100.0},
    {year: '2016', month: '7', country: 'Israel', mean: 73.66375448028666, stdev: 22.011993184816205, min: 10.0, max: 100.0},
    {year: '2016', month: '7', country: 'Israel', mean: 73.66375448028666, stdev: 22.011993184816205, min: 10.0, max: 100.0}
  ];

  pressureDataSource: SecondQueryResultSample[] = [
    {year: '2016', month: '7', country: 'Israel', mean: 1001.8474462365598, stdev: 17.097673701040286, min: 960.0, max: 1025.0},
    {year: '2016', month: '7', country: 'Israel', mean: 1001.8474462365598, stdev: 17.097673701040286, min: 960.0, max: 1025.0},
    {year: '2016', month: '7', country: 'Israel', mean: 1001.8474462365598, stdev: 17.097673701040286, min: 960.0, max: 1025.0},
    {year: '2016', month: '7', country: 'Israel', mean: 1001.8474462365598, stdev: 17.097673701040286, min: 960.0, max: 1025.0},
    {year: '2016', month: '7', country: 'Israel', mean: 1001.8474462365598, stdev: 17.097673701040286, min: 960.0, max: 1025.0},
    {year: '2016', month: '7', country: 'Israel', mean: 1001.8474462365598, stdev: 17.097673701040286, min: 960.0, max: 1025.0},
    {year: '2016', month: '7', country: 'Israel', mean: 1001.8474462365598, stdev: 17.097673701040286, min: 960.0, max: 1025.0},
    {year: '2016', month: '7', country: 'Israel', mean: 1001.8474462365598, stdev: 17.097673701040286, min: 960.0, max: 1025.0}
  ];

  constructor() { }

  ngOnInit() {
  }

}
