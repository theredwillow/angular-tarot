import { Component } from '@angular/core';
import { SpreadService } from '../services/spread.service';
import { StepService } from '../services/step.service';

@Component({
  selector: 'app-title-input',
  templateUrl: './title-input.component.html',
  styleUrls: ['./title-input.component.scss']
})
export class TitleInputComponent {
  constructor(private stepService: StepService, private spreadService: SpreadService) {}

  setTitle(title: string) {
    // FIXME
    if (!title){
      window.alert("You need to provide a title for your spread!");
      return;
    }
    this.spreadService.setTitle(title);
    this.stepService.nextStep();
  }
}
