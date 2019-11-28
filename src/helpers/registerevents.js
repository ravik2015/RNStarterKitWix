/* eslint-disable */
import NetInfo from '@react-native-community/netinfo';
import {Navigation} from 'react-native-navigation';
const Events = {
  RegisterNetEvents: () => {
    let handleFirstConnectivityChange = () => {
      NetInfo.isConnected.removeEventListener(
        'connectionChange',
        handleFirstConnectivityChange,
      );
    };
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      handleFirstConnectivityChange,
    );
    NetInfo.isConnected.fetch().then(() => {});
  },
  RegisterComponentDidAppearListener: store => {
    Navigation.events().registerComponentDidAppearListener(
      ({componentId, componentName}) => {
        store.dispatch({
          type: 'SCREEN_LISTENER',
          payload: {componentId, componentName},
        });
      },
    );
  },
};
export default Events;
