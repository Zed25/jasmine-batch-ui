export class ThirdQueryResultSampleRepresentation {
  country: string;
  city: string;
  new_position: number;
  new_value: number;
  old_position: number;
  old_value: number;


  constructor(country: string, city: string, new_position: number, new_value: number, old_position: number, old_value: number) {
    this.country = country;
    this.city = city;
    this.new_position = new_position;
    this.new_value = new_value;
    this.old_position = old_position;
    this.old_value = old_value;
  }
}
