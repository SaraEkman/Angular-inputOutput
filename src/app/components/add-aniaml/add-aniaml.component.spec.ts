import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAniamlComponent } from './add-aniaml.component';

describe('AddAniamlComponent', () => {
  let component: AddAniamlComponent;
  let fixture: ComponentFixture<AddAniamlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAniamlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAniamlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
