import { Injectable } from '@angular/core';
import { Spread } from './spread.model';

const initialState = {
  title: "",
  cards: []
};

@Injectable({
  providedIn: 'root'
})
export class SpreadService {
  private spread: Spread = initialState;

  constructor() { }

  public getSpreadTitle(): Spread["title"] {
    return this.spread.title;
  }
}
