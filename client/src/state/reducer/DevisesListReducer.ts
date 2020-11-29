import _ from 'lodash';
import { State } from '../InitialState';
import {
  API_ACTIONS,
  FetchDevicesListAction,
  Device,
  Action,
} from '../Actions';
import { AxiosResponse } from 'axios';
import { AddDeviceAction } from '../Actions/AddDevice';
import { RemoveDeviceAction } from '../Actions/RemoveDevice';

export class DevisesListReducer {
  static reduce(state: State, action: Action) {
    switch (action.action) {
      case API_ACTIONS.FETCH_DEVICES_LIST:
        return this.fetchDeviceList(state, action as FetchDevicesListAction);
      case API_ACTIONS.ADD_DEVICE:
        return this.addDevice(state, action as AddDeviceAction);
      case API_ACTIONS.REMOVE_DEVICE:
        return this.removeDevice(state, action as RemoveDeviceAction);

      default:
        return { ...state };
    }
  }
  private static fetchDeviceList(state: State, action: FetchDevicesListAction) {
    if (action.payload.response) {
      let results = action.payload.response as AxiosResponse<Device[]>;

      return {
        ...state,
        devicesList: {
          ..._.mapKeys(results.data, (values) => {
            return values.deviceDescriptor.idProduct;
          }),
        },
        error: action.payload.error,
      };
    } else {
      return {
        ...state,
        error: action.payload.error,
      };
    }
  }

  private static addDevice(state: State, action: AddDeviceAction) {
    let payload = action.payload;
    return {
      ...state,
      devicesList: {
        ...state.devicesList,
        [payload.deviceDescriptor.idProduct]: payload,
      },
    };
  }
  private static removeDevice(state: State, action: RemoveDeviceAction) {
    let payload = action.payload;
    return {
      ...state,
      devicesList: {
        ..._.omit(state.devicesList, [payload.deviceDescriptor.idProduct]),
      },
    };
  }
}
