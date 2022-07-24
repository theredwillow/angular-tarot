import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Card, RwsTarotCard, Spread } from './spread.model';

export const initialState: Spread = {
  title: "",
  cards: []
};

const newPosition = (): Card => ({
  position: "",
  isFaceUp: false
});

const API_URL = "https://rws-cards-api.herokuapp.com/api/v1/cards/random";

@Injectable({
  providedIn: 'root'
})
export class SpreadService {
  private spread: Spread = initialState;
  // FIXME Can this be number? Just following Traversy's video first to make sure it works.
  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }

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

  fetchCards(): void {
    const numOfCards = this.spread.cards.length;
    interface TarotReq {
      cards: RwsTarotCard[],
      nhits: number
    }
    const req = this.http.get<TarotReq>(`${API_URL}?n=${numOfCards}`);
    req.subscribe((data) => {
      this.spread.cards = this.spread.cards.map((card, i) => ({
        ...card,
        ...data.cards[i]
      }));
      this.subject.next(this.spread);
    });
  }
}
