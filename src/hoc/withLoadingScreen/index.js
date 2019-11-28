/* eslint-disable module-resolver/use-alias */

// Try this by using something like  withLoadingScreen('large')(InfoScreen)

import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {View, ActivityIndicator} from 'react-native';

const withLoadingScreen = (size = 'small') => WrappedComponent => {
  class LoadingScreen extends React.PureComponent {
    render() {
      if (this.props.loading)
        return <ActivityIndicator size={size} color="white" />;
      return <WrappedComponent {...this.props} />;
    }
  }

  hoistNonReactStatics(LoadingScreen, WrappedComponent);

  LoadingScreen.displayName = `WithLoadingScreen(${getDisplayName(
    WrappedComponent,
  )})`;

  return LoadingScreen;
};

function getDisplayName(WrappedComponent) {
  return (
    WrappedComponent.displayName || WrappedComponent.name || 'LoadingScreen'
  );
}

export default withLoadingScreen;
