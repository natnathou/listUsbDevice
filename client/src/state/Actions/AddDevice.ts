import { ActionTypes, API_ACTIONS, Device } from '.';

export interface AddDeviceAction {
  type: ActionTypes.API;
  action: API_ACTIONS.ADD_DEVICE;
  payload: Device;
}

export const addDevice = (device: Device): AddDeviceAction => {
  return {
    type: ActionTypes.API,
    action: API_ACTIONS.ADD_DEVICE,
    payload: device,
  };
};
