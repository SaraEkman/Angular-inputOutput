import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-print-animals',
  templateUrl: './print-animals.component.html',
  styleUrls: ['./print-animals.component.scss']
})
export class PrintAnimalsComponent implements OnInit {
  animals: Animal[] = [
    new Animal('Kanin', 'Dvärgvädur', 3, 'gräs'),
    new Animal('Katt', 'BondeKatt', 5, 'fisk'),
    new Animal('hunden Jack', 'Australian', 2, 'hundmat'),
    new Animal('musen Saly', 'vanlig', 1, 'ost')
  ]

  isFed: number[] = [0]

  sumF:number= 0

  printA: string[] = []

  constructor() { }

  ngOnInit(): void {
    let res:string = localStorage.getItem('num') || '[]';
    this.sumF = JSON.parse(res);
  }

  updateIsFed(event: Animal) {
    console.log(event)
    this.isFed.push(1);
    this.sumF = this.isFed.reduce((a, b) => a + b);
    // this.printA.push(`${event.namn} är Matad`)
    localStorage.setItem('num', JSON.stringify(this.sumF));
  }

  remo(ev: Animal) {
    console.log(ev);
    this.isFed.push(-1);
    this.sumF = this.isFed.reduce((a, b) => a + b);
    // this.printA.push(`${ev.namn} är inte Matad`);
     localStorage.setItem('num', JSON.stringify(this.sumF));
  }

}
