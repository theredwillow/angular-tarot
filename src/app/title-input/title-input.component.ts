import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/app-state.model';
import { SetTitleAction } from '../store/actions/spread.action';
import { NextStepAction } from '../store/actions/step.action';

@Component({
  selector: 'app-title-input',
  templateUrl: './title-input.component.html',
  styleUrls: ['./title-input.component.scss']
})
export class TitleInputComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
  }

  setTitle(title: string) {
    // FIXME
    if (!title){
      window.alert("You need to provide a title for your spread!");
      return;
    }
    this.store.dispatch(new SetTitleAction(title));
    this.store.dispatch(new NextStepAction());
  }
}
