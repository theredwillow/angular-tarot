import { Action } from '@ngrx/store';
import { Spread } from '../models/spread.model';

export enum SpreadActionType {
  SET_TITLE = '[SPREAD] Set Title',
}

export class SetTitleAction implements Action {
  readonly type = SpreadActionType.SET_TITLE;

  //add an optional payload

  constructor(public payload: Spread) {}
}

export type SpreadAction = SetTitleAction;
