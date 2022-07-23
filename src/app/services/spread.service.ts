import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Spread } from './spread.model';

const initialState: Spread = {
  title: "",
  cards: []
};

@Injectable({
  providedIn: 'root'
})
export class SpreadService {
  private spread: Spread = initialState;
  // FIXME Can this be number? Just following Traversy's video first to make sure it works.
  private subject = new Subject<any>();

  constructor() { }

  setTitle(title: string): void {
    this.spread.title = title;
    this.subject.next(this.spread);
  }

  onSetTitle(): Observable<any> {
    return this.subject.asObservable();
  }
}
