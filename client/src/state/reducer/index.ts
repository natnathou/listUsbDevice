import { State } from '../InitialState';
import { Action, ActionTypes } from '../Actions';
import { DevisesListReducer } from './DevisesListReducer';

export const stateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.API:
      return DevisesListReducer.reduce(state, action);
    default:
      return { ...state };
  }
};
