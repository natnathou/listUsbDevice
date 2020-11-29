import React from 'react';
import { StateProvider } from '../state/StateContext';
import { stateReducer } from '../state/reducer';
import { initialState } from '../state/InitialState';
import { Header } from './Header';
import { DevicesList } from './DevicesList';
import '../style/App.css';

export const App = (): JSX.Element => {
  return (
    <div>
      <StateProvider reducer={stateReducer} initialState={initialState}>
        <div className='App ui container'>
          <Header />
          <DevicesList />
        </div>
      </StateProvider>
    </div>
  );
};
