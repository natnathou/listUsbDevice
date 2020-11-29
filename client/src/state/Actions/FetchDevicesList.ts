import { Action, ActionTypes, API_ACTIONS } from '.';
import axios, { AxiosResponse } from 'axios';

export interface Device {
  deviceDescriptor: {
    idVendor: number;
    idProduct: number;
  };
  _parent: {}[] | null;
  allConfigDescriptors: { extra: Buffer }[];
}

export interface FetchDevicesListAction {
  type: ActionTypes.API;
  action: API_ACTIONS.FETCH_DEVICES_LIST;
  payload: { response: AxiosResponse<Device[]> | boolean; error: boolean };
}
export const fetchDevicesList = async (dispatch: React.Dispatch<Action>) => {
  let response: AxiosResponse<Device[]> | boolean = false;
  let error: any;

  try {
    response = await axios.get<Device[]>(
      `http://localhost:5000/server/fetch_usb_devises`
    );
  } catch (e) {
    error = e;
  }

  dispatch({
    type: ActionTypes.API,
    action: API_ACTIONS.FETCH_DEVICES_LIST,
    payload: { response, error },
  });
};
