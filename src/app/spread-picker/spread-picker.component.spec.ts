import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadPickerComponent } from './spread-picker.component';

describe('SpreadPickerComponent', () => {
  let component: SpreadPickerComponent;
  let fixture: ComponentFixture<SpreadPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpreadPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpreadPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
