/* eslint-disable module-resolver/use-alias */

// Try this by using something like  withLoadingScreen('large')(InfoScreen)
import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const withLoadingScreen = (size = 'small') => WrappedComponent => {
  class LoadingScreen extends React.PureComponent {
    render() {
      if (this.props.isLoading)
        return (
          <View style={Styles.homeContainer}>
            <ActivityIndicator size={size} color="blue" />
          </View>
        );
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

const Styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});
