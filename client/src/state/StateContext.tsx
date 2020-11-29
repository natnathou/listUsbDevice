import { ContextDevTool } from 'react-context-devtool';
import React, { createContext, Reducer, useContext, useReducer } from 'react';
import { initialState, State } from './InitialState';
import { Action } from './Actions';

interface Provider {
  reducer: Reducer<State, Action>;
  initialState: State;
  children?: any;
}

const context = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const StateProvider = ({
  reducer,
  initialState,
  children,
}: Provider) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <context.Provider value={{ state, dispatch }}>
      <ContextDevTool context={context} id="Context" displayName="Context" />
      {children}
    </context.Provider>
  );
};

export const useGlobalContext = () => {
  const { state } = useContext(context);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(context);
  return dispatch;
};
