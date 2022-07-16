import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Step } from './step.model';
import { nextStep } from './step.actions';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  step$: Observable<Step>;
  stepWord: string = 'one';

  constructor(private store: Store<{ step: Step }>) {
    this.step$ = store.select("step");
  }

  ngOnInit(): void {
    this.step$.subscribe(event => this.stepWord = event.word);
  }

  next(): void {
    this.store.dispatch(nextStep());
  }
}
