// example {country: United States, city: Las Vegas,
// newRank : { position : 1, value: 19.069047474348224 }, oldRank : { position: 4, value: 18.35447799202899 } }
export class ThirdQueryResultSample {
  country: string;
  city: string;
  newRank: Ranking;
  oldRank: Ranking;

  constructor(country: string, city: string, newRank: Ranking, oldRank: Ranking) {
    this.country = country;
    this.city = city;
    this.newRank = newRank;
    this.oldRank = oldRank;
  }
}

class Ranking {
  position: number;
  value: number;

  constructor(position: number, value: number) {
    this.position = position;
    this.value = value;
  }
}
