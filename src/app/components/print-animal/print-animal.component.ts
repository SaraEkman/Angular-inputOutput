import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-print-animal',
  templateUrl: './print-animal.component.html',
  styleUrls: ['./print-animal.component.scss']
})
export class PrintAnimalComponent implements OnInit {
  @Input() animal: Animal = new Animal('', '', 0, '')

  @Output() fed = new EventEmitter<Animal>()
  @Output() notFed = new EventEmitter<Animal>()

  // disa: boolean = false
  constructor() {}

  ngOnInit(): void {
  }
  save() {
    this.animal.isFed = !this.animal.isFed;
    this.fed.emit(this.animal);
  }
  remove() {
    this.animal.isFed = !this.animal.isFed;
    this.notFed.emit(this.animal);
  }

}
