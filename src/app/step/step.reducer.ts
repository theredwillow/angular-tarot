import { createReducer, on } from '@ngrx/store';
import { nextStep } from './step.actions';
import { Step } from './step.model';
import { toWords } from 'number-to-words';

const LAST_STEP = 3;

export const initialState: Step = {
  num: 1,
  word: 'one',
};

export const stepReducer = createReducer(
  initialState,
  on(nextStep, (state) => {
    if (state.num >= LAST_STEP) {
      return state;
    }
    const newStep = state.num + 1;
    return { num: newStep, word: toWords(newStep) };
  })
);
