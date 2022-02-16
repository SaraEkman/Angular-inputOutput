import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-print-animals',
  templateUrl: './print-animals.component.html',
  styleUrls: ['./print-animals.component.scss']
})
export class PrintAnimalsComponent implements OnInit {
  animals: Animal[] = []

  isFed: number[] = [0]

  sumF: number = 0;

  constructor(private service:AnimalService) { }

  ngOnInit(): void {
    this.service.animals$.subscribe((getAnimal) => {
      this.animals = getAnimal;
      console.log(getAnimal);
    })
    console.log(this.animals);
    let res = localStorage.getItem('num') || '[]';
    this.sumF = JSON.parse(res);
  }

  updateIsFed(event: Animal) {
    if (event.isFed) {
      console.log(event)
      event.hMany.push(+1);
      event.num = this.sumOfArr(event.hMany)
      console.log(event.num);

      this.isFed.push(+1);
      this.sumF =  this.sumOfArr(this.isFed)
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
      this.sumF =  this.sumOfArr(this.isFed)
       localStorage.setItem('num', JSON.stringify(this.sumF));
    }
  }

  sumOfArr(arr: number[]) {
   return arr.reduce((a, b) => a + b)
  }

  getAnimalToR(newAnimal: number) {
    this.service.removeAnimal(newAnimal)
  }

}
