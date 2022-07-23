import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Spread } from './store/models/spread.model';
import { AppState } from './store/models/app-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-tarot';
  spread$!: Observable<Spread>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.spread$ = this.store.select((store) => store.spread);
  }
}
