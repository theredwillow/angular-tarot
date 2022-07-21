import { Component } from '@angular/core';
import { Spread } from './spread.model';
import { SpreadService } from './spread.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tarot';
  public spreadTitle: Spread["title"] = this.spreadService.getSpreadTitle();

  constructor(private spreadService: SpreadService) {}
}
