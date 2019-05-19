// example {country: United States, city: Las Vegas,
// newChart : { position : 1, value: 19.069047474348224 }, oldChart : { position: 4, value: 18.35447799202899 } }
export class ThirdQueryResultSample {
  country: string;
  city: string;
  newChart: Chart;
  oldChart: Chart;

  constructor(country: string, city: string, newChart: Chart, oldChart: Chart) {
    this.country = country;
    this.city = city;
    this.newChart = newChart;
    this.oldChart = oldChart;
  }
}

class Chart {
  position: number;
  value: number;

  constructor(position: number, value: number) {
    this.position = position;
    this.value = value;
  }
}
