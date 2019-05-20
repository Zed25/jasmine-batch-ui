export class SecondQueryResultSampleRepresentation {
  year: string;
  month: number;
  country: string;
  mean: number;
  stdev: number;
  min: number;
  max: number;


  constructor(year: string, month: number, country: string, mean: number, stdev: number, min: number, max) {
    this.year = year;
    this.month = month;
    this.country = country;
    this.mean = mean;
    this.stdev = stdev;
    this.min = min;
    this.max = max;
  }
}
