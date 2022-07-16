import { Component, Input, OnInit } from '@angular/core';
import { toWords } from 'number-to-words';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  @Input() stepNum: number = 1;
  stepNumWord: string = toWords(this.stepNum);

  constructor() { }

  ngOnInit(): void {
  }

  nextStep(): void {
    // TODO Make this change state
    console.log("The next step button has been pressed!");
  }
}
