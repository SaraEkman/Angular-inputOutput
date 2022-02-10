import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-print-animals',
  templateUrl: './print-animals.component.html',
  styleUrls: ['./print-animals.component.scss']
})
export class PrintAnimalsComponent implements OnInit {
  animals: Animal[] = [
    new Animal('Kanin Pet', 'Dvärgvädur', 3, 'gräs'),
    new Animal('Katt Elsa', 'BondeKatt', 5, 'fisk'),
    new Animal('hunden Jack', 'Australian', 2, 'hundmat'),
    new Animal('musen Saly', 'vanlig', 1, 'ost')
  ]

  isFed: number[] = [0]

  sumF: number = 0

  constructor() { }

  ngOnInit(): void {
    let res:string = localStorage.getItem('num') || '[]';
    this.sumF = JSON.parse(res);
  }

  updateIsFed(event: Animal) {
    if (event.isFed) {
      console.log(event)
      event.hMany.push(1);
      event.num = this.sumOfArr(event.hMany)
      console.log(event.num);

      this.isFed.push(1);
      this.sumF = this.isFed.reduce((a, b) => a + b);
      localStorage.setItem('num', JSON.stringify(this.sumF));
    }
  }

  remo(ev: Animal) {
    if (ev.isFed === false && this.sumF>0) {
      console.log(ev);
      ev.hMany.push(-1);
      ev.num =  this.sumOfArr(ev.hMany)
      console.log(ev.num);
      this.isFed.push(-1);
      this.sumF = this.isFed.reduce((a, b) => a + b);
       localStorage.setItem('num', JSON.stringify(this.sumF));
    }
  }

  sumOfArr(arr: number[]) {
   return arr.reduce((a, b) => a + b)
  }

}
