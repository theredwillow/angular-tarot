import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Spread } from '../services/spread.model';
import { premadeSpreads } from './premade-spreads.fixture';
import { SpreadService } from '../services/spread.service';
import { StepService } from '../services/step.service';

@Component({
  selector: 'app-spread-picker',
  templateUrl: './spread-picker.component.html',
  styleUrls: ['./spread-picker.component.scss']
})
export class SpreadPickerComponent implements OnInit {
  premadeSpreads = premadeSpreads;
  step: number = 1;
  stepSubscription: Subscription;
  spread!: Spread;
  spreadSubscription: Subscription;

  constructor(
    private stepService: StepService,
    private spreadService: SpreadService,
  ) {
    this.stepSubscription = this.stepService.getStep().subscribe(
      (value) => (this.step = value)
    );
    this.spreadSubscription = this.spreadService.getSpread().subscribe(
      (value) => (this.spread = value)
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.stepSubscription.unsubscribe();
    this.spreadSubscription.unsubscribe();
  }

  selectSpread(spread: Spread) {
    this.stepService.nextStep();
    this.stepService.nextStep();
    this.spreadService.setSpread(spread);
  }
}
