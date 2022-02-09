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
    // this.disa = !this.disa
    this.fed.emit(this.animal)
  }
  remove() {
    // this.disa = !this.disa;
    this.notFed.emit(this.animal)
  }

}
