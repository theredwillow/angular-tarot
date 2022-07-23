import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-positions-input',
  templateUrl: './positions-input.component.html',
  styleUrls: ['./positions-input.component.scss']
})
export class PositionsInputComponent implements OnInit {
  @Input() title: string = "Untitled";

  constructor() { }

  ngOnInit(): void {
  }
}
