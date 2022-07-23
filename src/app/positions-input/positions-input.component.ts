import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Spread } from '../services/spread.model';
import { initialState, SpreadService } from '../services/spread.service';
import { StepService } from '../services/step.service';

@Component({
  selector: 'app-positions-input',
  templateUrl: './positions-input.component.html',
  styleUrls: ['./positions-input.component.scss'],
})
export class PositionsInputComponent {
  spread: Spread = initialState;
  spreadSubscription: Subscription;

  constructor(
    private stepService: StepService,
    private spreadService: SpreadService
  ) {
    this.spreadSubscription = this.spreadService
      .getSpread()
      .subscribe((value) => (this.spread = value));
    // Creates the first input uniformly
    this.addPosition();
  }

  ngOnDestroy() {
    this.spreadSubscription.unsubscribe();
  }

  addPosition(): void {
    this.spreadService.addPosition();
  }

  updatePosition(e: Event, i: number) {
    const target = e.target as HTMLInputElement;
    this.spreadService.updatePosition(i, target!.value);
  }

  removePosition(i: number): void {
    this.spreadService.removePosition(i);
  }

  validatePositions(): void {
    if (!this.spread.cards.length) {
      window.alert('You need at least one position in your spread!');
      return;
    }
    this.stepService.nextStep();
  }
}
