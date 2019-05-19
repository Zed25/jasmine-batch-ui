// example { year : 2014, month: 4, country: United States, mean: 62.58350030054094, stdev: 23.765833816479844, min: 5.0, max: 100}
export class SecondQueryResultSample {
  year: string;
  month: string;
  country: string;
  mean: number;
  stdev: number;
  min: number;
  max: number;

  constructor(year: string, month: string, country: string, mean: number, stdev: number, min: number, max: number) {
    this.year = year;
    this.month = month;
    this.country = country;
    this.mean = mean;
    this.stdev = stdev;
    this.min = min;
    this.max = max;
  }
}
