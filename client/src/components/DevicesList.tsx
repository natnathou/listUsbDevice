// import React, { useEffect } from 'react';
// import _ from 'lodash';
// import io from 'socket.io-client';
// import { useDispatch, useGlobalContext } from '../state/StateContext';
// import { Device, fetchDevicesList } from '../state/Actions';
// import { addDevice } from '../state/Actions/AddDevice';
// import { removeDevice } from '../state/Actions/RemoveDevice';
// import '../style/DevicesList.css';

// const ENDPOINT = 'http://localhost:5001';

// export const DevicesList = () => {
//   const state = useGlobalContext();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     fetchDevicesList(dispatch);
//   }, [dispatch]);

//   useEffect(() => {
//     const socket = io.io(ENDPOINT);
//     socket.on('usb_adding', (data: Device) => {
//       dispatch(addDevice(data));
//     });
//     socket.on('usb_removing', (data: Device) => {
//       dispatch(removeDevice(data));
//     });
//   }, [dispatch]);

//   const listRendering = () => {
//     return _.toArray(state.devicesList).map((data, index) => {
//       return (
//         <div className='item' key={index}>
//           <div className='ui celled horizontal list Line'>
//             <div className='item'>{data._parent ? `USB` : `HUB`}</div>
//             <div className='item'>{data.deviceDescriptor.idProduct}</div>
//             <div className='item'>{data.deviceDescriptor.idVendor}</div>
//             <div className='item'>
//               {data.allConfigDescriptors
//                 ? data.allConfigDescriptors.map((datas) =>
//                     datas.extra.toString('utf-8')
//                   )
//                 : null}
//             </div>
//           </div>
//         </div>
//       );
//     });
//   };
//   return (
//     <div className='ui divided list'>
//       <div className='item' key={0}>
//         <div className='ui celled horizontal list Line'>
//           <div className='item'>TYPE</div>
//           <div className='item'>PRODUCT ID</div>
//           <div className='item'>VENDOR ID</div>
//           <div className='item'>DESCRIPTION</div>
//         </div>
//       </div>
//       {listRendering()}
//     </div>
//   );
// };

import React, { useEffect } from 'react';
import _ from 'lodash';
import io from 'socket.io-client';
import { useDispatch, useGlobalContext } from '../state/StateContext';
import { Device, fetchDevicesList } from '../state/Actions';
import { addDevice } from '../state/Actions/AddDevice';
import { removeDevice } from '../state/Actions/RemoveDevice';
import '../style/DevicesList.css';

const ENDPOINT = 'http://localhost:5001';

export const DevicesList = () => {
  const state = useGlobalContext();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchDevicesList(dispatch);
  }, [dispatch]);

  useEffect(() => {
    const socket = io.io(ENDPOINT);
    socket.on('usb_adding', (data: Device) => {
      dispatch(addDevice(data));
    });
    socket.on('usb_removing', (data: Device) => {
      dispatch(removeDevice(data));
    });
  }, [dispatch]);

  const listRendering = () => {
    return _.toArray(state.devicesList).map((data, index) => {
      return (
        <div key={index} className='row'>
          <div className='cel'>{data._parent ? `HUB` : `USB`}</div>
          <div className='cel'>{data.deviceDescriptor.idProduct}</div>
          <div className='cel'>{data.deviceDescriptor.idVendor}</div>
          <div className='cel'>
            {data.allConfigDescriptors
              ? data.allConfigDescriptors.map((datas) =>
                  datas.extra.toString('utf-8')
                )
              : null}
          </div>
        </div>
      );
    });
  };
  return (
    <div className='Table'>
      <div className='row'>
        <div className='cel header'>TYPE</div>
        <div className='cel header'>PRODUCT ID</div>
        <div className='cel header'>VENDOR ID</div>
        <div className='cel header'>DESCRIPTION</div>
      </div>

      {listRendering()}
    </div>
  );
};
