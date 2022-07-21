import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsInputComponent } from './positions-input.component';

describe('PositionsInputComponent', () => {
  let component: PositionsInputComponent;
  let fixture: ComponentFixture<PositionsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionsInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
