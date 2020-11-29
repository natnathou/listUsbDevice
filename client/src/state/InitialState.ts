import { Device } from './Actions';

export interface State {
  devicesList: { [idProduct: number]: Device };
  error: any;
}

export const initialState: State = {
  devicesList: {},
  error: false,
};
