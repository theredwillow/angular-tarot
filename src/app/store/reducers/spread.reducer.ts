import { Spread } from '../models/spread.model';
import { SpreadAction, SpreadActionType } from '../actions/spread.action';

const initialState: Spread = {
  title: '',
};

export function SpreadReducer(
  state: Spread = initialState,
  action: SpreadAction
) {
  switch (action.type) {
    case SpreadActionType.SET_TITLE:
      return {...state, title: action.payload};
    default:
      return state;
  }
}
