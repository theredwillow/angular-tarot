import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepService {
  private step: number = 1;
  // FIXME Can this be number? Just following Traversy's video first to make sure it works.
  private subject = new Subject<any>();

  constructor() { }

  nextStep(): void {
    this.step = this.step + 1;
    this.subject.next(this.step);
  }

  onNextStep(): Observable<any> {
    return this.subject.asObservable();
  }

  // TODO prevStep(): void { }
}
