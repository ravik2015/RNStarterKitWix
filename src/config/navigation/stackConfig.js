/* eslint-disable module-resolver/use-alias */

import {Navigation} from 'react-native-navigation';
import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

export function manageSideMenuStackOptions() {
  return Platform.isPad
    ? {
        sideMenu: {
          right: {
            width: width / 2,
          },
        },
      }
    : {};
}

export function manageNavBarOptions() {
  return {
    statusBar: {
      visible: true,
      style: 'dark',
      backgroundColor: 'white',
    },
    topBar: {
      visible: false,
      height: 0,
    },
  };
}

export function manageAuthStackOptions() {
  return {
    statusBar: {
      visible: true,
      style: 'dark',
      backgroundColor: 'white',
    },
    topBar: {
      visible: false,
      height: 0,
    },
  };
}

export function manageSideMenuOptions() {
  return {
    shouldStretchDrawer: false, // defaults to true, when false sideMenu contents not stretched when opened past the width
    animationVelocity: 2500,
    component: {
      id: 'Drawer',
      name: 'Drawer',
      options: {
        statusBar: {
          visible: true,
          style: 'dark',
          backgroundColor: 'white',
        },
        topBar: {
          visible: false,
          height: 0,
        },
        animations: {
          setRoot: {
            enabled: 'true', // Optional, used to enable/disable the animation
            alpha: {
              from: 0,
              to: 1,
              duration: 400,
              startDelay: 100,
              interpolation: 'accelerate',
            },
            waitForRender: true,
          },
        },
      },
    },
  };
}
