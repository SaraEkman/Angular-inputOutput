export class Animal {
  namn: string;
  sort: string;
  vikt: number;
  mat: string;

  constructor(n: string, s: string, v: number, m:string) {
    this.namn = n;
    this.sort = s;
    this.vikt = v;
    this.mat = m;
  }

}
