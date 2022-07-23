import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-positions-input',
  templateUrl: './positions-input.component.html',
  styleUrls: ['./positions-input.component.scss']
})
export class PositionsInputComponent implements OnInit {
  @Input() title: string = "Untitled";
  positions$: Observable<string[]> = of([
    "What will be your next step?",
    "What tools do you have at your disposal?"
  ]);

  constructor() { }

  ngOnInit(): void {
    this.positions$.subscribe(next => {});
  }

  addPosition(): void {
    console.log("You're adding a new position.");
  }

  updatePosition(e: Event, i: number) {
    const target = e.target as HTMLInputElement;
    // this.positions$[i] = target?.value;
  }

  removePosition(i: number): void {
    console.log(`You're removing the ${i}th position.`);
  }
}
