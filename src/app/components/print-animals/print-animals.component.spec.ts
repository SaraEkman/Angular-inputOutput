import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAnimalsComponent } from './print-animals.component';

describe('PrintAnimalsComponent', () => {
  let component: PrintAnimalsComponent;
  let fixture: ComponentFixture<PrintAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintAnimalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
