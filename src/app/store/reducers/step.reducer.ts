import { StepAction, StepActionType } from '../actions/step.action';

const initialState = 1;

export function StepReducer(
  state = initialState,
  action: StepAction
) {
  switch (action.type) {
    case StepActionType.NEXT_STEP:
      return state + 1;
    default:
      return state;
  }
}
