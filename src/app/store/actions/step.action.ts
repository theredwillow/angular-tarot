import { Action } from '@ngrx/store';

export enum StepActionType {
  NEXT_STEP = '[STEP] Next Step',
}

export class NextStepAction implements Action {
  readonly type = StepActionType.NEXT_STEP;

  constructor() {}
}

export type StepAction = NextStepAction;
