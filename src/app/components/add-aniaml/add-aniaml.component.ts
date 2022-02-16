import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-add-aniaml',
  templateUrl: './add-aniaml.component.html',
  styleUrls: ['./add-aniaml.component.scss']
})
export class AddAniamlComponent implements OnInit {
  newAnimal: Animal = new Animal('','',0,'');

  constructor(private service:AnimalService) { }

  ngOnInit(): void { }

  addNewAniaml(n: string, s: string, w: number, f: string) {
    this.newAnimal = new Animal(n, s, w, f);
    this.service.addAnimal(this.newAnimal);
    console.log(n, s, w, f);
    console.log(this.newAnimal);
  }

}
