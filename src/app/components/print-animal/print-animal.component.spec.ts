import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAnimalComponent } from './print-animal.component';

describe('PrintAnimalComponent', () => {
  let component: PrintAnimalComponent;
  let fixture: ComponentFixture<PrintAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
