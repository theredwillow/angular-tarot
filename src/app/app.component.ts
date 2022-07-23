import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Spread } from './services/spread.model';
import { SpreadService } from './services/spread.service';
import { StepService } from './services/step.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-tarot';
  step: number = 1;
  stepSubscription: Subscription;
  spread!: Spread;
  spreadSubscription: Subscription;

  constructor(
    private stepService: StepService,
    private spreadService: SpreadService,
  ) {
    this.stepSubscription = this.stepService.onNextStep().subscribe(
      (value) => (this.step = value)
    );
    this.spreadSubscription = this.spreadService.onSetTitle().subscribe(
      (value) => (this.spread = value)
    );
  }

  ngOnDestroy() {
    this.stepSubscription.unsubscribe();
    this.spreadSubscription.unsubscribe();
  }
}
