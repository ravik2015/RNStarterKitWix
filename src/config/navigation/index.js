/* eslint-disable module-resolver/use-alias */
import {Navigation} from 'react-native-navigation';
import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');
import {
  manageSideMenuStackOptions,
  manageNavBarOptions,
  manageSideMenuOptions,
  manageAuthStackOptions,
} from './stackConfig';

export const goToAuth = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'Auth',
        children: [
          {
            component: {
              name: 'SignIn',
              passProps: {
                text: 'AuthModule',
              },
              options: manageAuthStackOptions(),
            },
          },
        ],
      },
    },
  });

export const goHome = () =>
  Navigation.setRoot({
    root: {
      sideMenu: {
        // right: manageSideMenuOptions(),
        center: {
          stack: {
            id: 'dashboard',
            children: [
              {
                component: {
                  name: 'DashBoard',
                  options: manageNavBarOptions(),
                },
              },
            ],
          },
        },
        options: manageSideMenuStackOptions(),
      },
    },
  });
