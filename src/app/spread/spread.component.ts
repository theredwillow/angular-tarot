import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Spread } from './spread.model';

@Component({
  selector: 'app-spread',
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.scss']
})
export class SpreadComponent implements OnInit {
  spread$: Observable<Spread>;
  spreadTitle: string = '';

  constructor(private store: Store<{ spread: Spread }>) {
    this.spread$ = store.select("spread");
  }

  ngOnInit(): void {
    this.spread$.subscribe(event => this.spreadTitle = event.title);
  }

  changeTitle(): void {
  }

  addPosition(): void {
  }

  removePosition(): void {
  }

  drawCards(): void {
  }

  flipCard(): void {
  }
}
