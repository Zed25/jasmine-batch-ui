export class City {
  name: string;
  lat: number;
  lon: number;
  country: string;
  offset: string;

  constructor(name: string, lat: number, lon: number, country: string, offset: string) {
    this.name = name;
    this.lat = lat;
    this.lon = lon;
    this.country = country;
    this.offset = offset;
  }
}
