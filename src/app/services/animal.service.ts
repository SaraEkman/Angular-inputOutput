import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Animal } from '../models/Animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private  animals: Animal[] = [
    new Animal('Kanin Pet', 'Dvärgvädur', 3, 'gräs'),
    new Animal('Katt Elsa', 'BondeKatt', 5, 'fisk'),
    new Animal('hunden Jack', 'Australian', 2, 'hundmat'),
    new Animal('musen Saly', 'vanlig', 1, 'ost')
  ]
  animals$: Observable<Animal[]> = of(this.animals);

  constructor() { }

  getAnimals() {
    return this.animals;
  }

  addAnimal(newAniaml: Animal) {
    // for (let i in newAniaml) {
    //   this.animals.push(newAniaml[i])
    // }
    this.animals.push(newAniaml)
  }

  removeAnimal(i: number) {
    this.animals.splice(i,1)
  }
}
