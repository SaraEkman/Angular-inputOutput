export class Animal {
  namn: string;
  sort: string;
  vikt: number;
  mat: string;
  isFed: boolean;
  hMany: number[];
  num: number;

  constructor(n: string, s: string, v: number, m:string) {
    this.namn = n;
    this.sort = s;
    this.vikt = v;
    this.mat = m;
    this.isFed = false;
    this.hMany = [0];
    this.num = 0;
  }

}
