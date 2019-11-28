import {Navigation} from 'react-native-navigation';

export const pushToParticularScreen = (
  componentId,
  screenName,
  passProps = {},
) => {
  return () => {
    Navigation.push(componentId, {
      component: {
        name: screenName,
        passProps,
        options: {
          sideMenu: {
            left: {
              visible: false,
              enabled: false,
            },
          },
        },
      },
    });
  };
};

export const pushToParticularScreenWithCustomOptions = (
  componentId,
  screenName,
  // options,
  passProps = {},
) => {
  return () => {
    Navigation.push(componentId, {
      component: {
        name: screenName,
        passProps,
        options: {
          topBar: {
            visible: false,
            height: 0,
          },
          statusBar: {
            visible: true,
            style: 'dark',
            backgroundColor: 'white',
          },
          animations: {
            push: {
              waitForRender: true,
            },
          },
        },
      },
    });
  };
};

export const pop = componentId => {
  return () => {
    Navigation.pop(componentId);
  };
};

/**
 * Navigate to a new page and clear the backstack.
 */
export const resetTo = newScreen => {
  return dispatch => {
    dispatch(navigate(newScreen, true));
  };
};

export const mergeOptions = (componentId, draweropen) => {
  return () => {
    Navigation.mergeOptions(componentId, {
      sideMenu: {
        left: {
          visible: draweropen,
        },
      },
    });
  };
};
export const setScreenStack = (componentId, stack, visible) => {
  return () => {
    Navigation.setStackRoot(componentId, {
      component: {
        name: stack,
        options: {
          topBar: {
            title: {
              text: 'Home',
            },
          },
          bottomTabs: {
            visible,
            drawBehind: true,
          },
        },
      },
    });
  };
};

/**
 * Internal helper method for setting the redux state
 */
export const navigate = (newScreen, reset) => {
  return {
    type: 'SCREEN',
    screen: newScreen,
    isReset: reset,
  };
};

export const showNotification = (
  description,
  type = 'success',
  title = 'Overture Health Care',
  autoHide = true,
  backgroundColor = 'transparent',
  textColor = 'black',
) => {
  return dispatch => {
    showMessage({
      message: title,
      description,
      backgroundColor, // background color
      color: textColor, // text color
      autoHide,
      type,
    });
  };
};

export const hideNotification = () => {
  return dispatch => {
    hideMessage();
  };
};
