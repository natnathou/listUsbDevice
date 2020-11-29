import { ActionTypes, API_ACTIONS, Device } from '.';

export interface RemoveDeviceAction {
  type: ActionTypes.API;
  action: API_ACTIONS.REMOVE_DEVICE;
  payload: Device;
}

export const removeDevice = (device: Device): RemoveDeviceAction => {
  return {
    type: ActionTypes.API,
    action: API_ACTIONS.REMOVE_DEVICE,
    payload: device,
  };
};
