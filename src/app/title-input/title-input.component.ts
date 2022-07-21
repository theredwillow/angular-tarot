import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-input',
  templateUrl: './title-input.component.html',
  styleUrls: ['./title-input.component.scss']
})
export class TitleInputComponent implements OnInit {
  @Input() title: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
