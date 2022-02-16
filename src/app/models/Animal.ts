export class Animal {
  name: string;
  sort: string;
  weight: number;
  food: string;
  isFed: boolean;
  hMany: number[];
  num: number;

  constructor(n: string, s: string, v: number, m:string) {
    this.name = n;
    this.sort = s;
    this.weight = v;
    this.food = m;
    this.isFed = false;
    this.hMany = [0];
    this.num = 0;
  }

}
