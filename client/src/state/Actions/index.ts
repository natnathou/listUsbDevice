import { FetchDevicesListAction } from '../Actions';
import { AddDeviceAction } from './AddDevice';
import { RemoveDeviceAction } from './RemoveDevice';

export * from './FetchDevicesList';

export enum ActionTypes {
  API = 'API',
}

export enum API_ACTIONS {
  FETCH_DEVICES_LIST = 'FETCH_DEVICES_LIST',
  ADD_DEVICE = 'ADD_DEVICE',
  REMOVE_DEVICE = 'REMOVE_DEVICE',
}

type MainAction = API_ACTIONS;

export interface Actions {
  type: ActionTypes;
  action: MainAction;
  payload?: any;
}

export type Action =
  | Actions
  | FetchDevicesListAction
  | AddDeviceAction
  | RemoveDeviceAction;
