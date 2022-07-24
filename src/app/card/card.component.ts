import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card, Spread } from '../services/spread.model';
import { initialState, SpreadService } from '../services/spread.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  spread: Spread = initialState;
  spreadSubscription: Subscription;
  // FIXME Provide a blank card initializer
  @Input() card!: Card;

  constructor(
    private spreadService: SpreadService
  ) {
    this.spreadSubscription = this.spreadService
      .getSpread()
      .subscribe((value) => (this.spread = value));
  }

  ngOnDestroy() {
    this.spreadSubscription.unsubscribe();
  }

  flipCard() {
    // FIXME i can't be optional
    this.spreadService.flipCard(this.card.i || 0);
  }
}
