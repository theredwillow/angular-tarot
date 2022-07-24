import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Spread } from '../services/spread.model';
import { initialState, SpreadService } from '../services/spread.service';

@Component({
  selector: 'app-card-flipper',
  templateUrl: './card-flipper.component.html',
  styleUrls: ['./card-flipper.component.scss']
})
export class CardFlipperComponent {
  spread: Spread = initialState;
  spreadSubscription: Subscription;

  constructor(
    private spreadService: SpreadService
  ) {
    this.spreadSubscription = this.spreadService
      .getSpread()
      .subscribe((value) => (this.spread = value));
    // FIXME This will cause a bug when previous step buttons are implemented
    this.spreadService.fetchCards();
  }

  ngOnDestroy() {
    this.spreadSubscription.unsubscribe();
  }

  flipCard(i: number) {
    
  }
}
