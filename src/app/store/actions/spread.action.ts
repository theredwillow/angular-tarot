import { Action } from '@ngrx/store';

export enum SpreadActionType {
  SET_TITLE = '[SPREAD] Set Title',
}

export class SetTitleAction implements Action {
  readonly type = SpreadActionType.SET_TITLE;

  //add an optional payload

  constructor(public payload: string) {}
}

export type SpreadAction = SetTitleAction;
