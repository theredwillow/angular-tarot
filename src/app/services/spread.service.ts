import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Card, Spread } from './spread.model';

export const initialState: Spread = {
  title: "",
  cards: []
};

const newPosition = (): Card => ({
  position: "",
  isFaceUp: false
});

@Injectable({
  providedIn: 'root'
})
export class SpreadService {
  private spread: Spread = initialState;
  // FIXME Can this be number? Just following Traversy's video first to make sure it works.
  private subject = new Subject<any>();

  constructor() { }

  getSpread(): Observable<any> {
    return this.subject.asObservable();
  }

  setTitle(title: string): void {
    this.spread.title = title;
    this.subject.next(this.spread);
  }

  addPosition(): void {
    this.spread.cards.push(newPosition());
    this.subject.next(this.spread);
  }

  updatePosition(i: number, value: string): void {
    this.spread.cards[i].position = value;
    this.subject.next(this.spread);
  }

  removePosition(i: number): void {
    this.spread.cards.splice(i, 1);
    this.subject.next(this.spread);
  }
}
