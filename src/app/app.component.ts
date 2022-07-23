import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Spread } from './store/models/spread.model';
import { AppState } from './store/models/app-state.model';
import { StepService } from './services/step.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-tarot';
  step: number = 1;
  stepSubscription: Subscription;
  spread$!: Observable<Spread>;

  constructor(
    private stepService: StepService,
    private store: Store<AppState>
  ) {
    this.stepSubscription = this.stepService.onNextStep().subscribe(
      (value) => (this.step = value)
    );
  }

  ngOnInit(): void {
    this.spread$ = this.store.select((store) => store.spread);
  }

  ngOnDestroy() {
    this.stepSubscription.unsubscribe();
  }
}
