import React, {createRef, PureComponent, Suspense} from 'react';
import {ActivityIndicator, View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import hoistStatics from 'hoist-non-react-statics';

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
export const ThemeContext = React.createContext('light');

/**
 * This HOC is meant to decorate any screen component that is at the
 * root of the navigation stack. It uses its constructor to set the global
 * navigation object. Having a global navigation object that lives in a
 * redux middleware allows us to control navigation by dispatching redux
 * actions.
 */

const withRedux = store => WrappedComponent => () => {
  class ReduxWrapper extends PureComponent {
    constructor(props) {
      super(props);
      const {navigator} = props;
      this.componentRef = createRef();
    }
    componentDidMount() {
      // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      // SplashScreen.hide();
    }

    hasMethod(method) {
      return (
        this.componentRef &&
        this.componentRef.current &&
        this.componentRef.current[method] &&
        this.componentRef.current[method].apply
      );
    }

    onNavigationButtonPressed(...args) {
      if (this.hasMethod('onNavigationButtonPressed')) {
        this.componentRef.current.onNavigationButtonPressed(...args);
      }
    }

    // add other callbacks here in the same way as done with onNavigationButtonPressed above
    render() {
      return (
        <Provider store={store}>
          <ThemeContext.Provider value="dark">
            <Suspense
              fallback={
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ActivityIndicator />
                </View>
              }>
              <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
            </Suspense>
          </ThemeContext.Provider>
        </Provider>
      );
    }
  }
  return React.forwardRef((props, ref) => {
    return <ReduxWrapper {...props} forwardedRef={ref} />;
  });

  // Give this component a more helpful display name in DevTools.
  // e.g. "ForwardRef(logProps(MyComponent))"
  const name = Component.displayName || Component.name;
  forwardRef.displayName = `logProps(${name})`;
  return React.forwardRef(forwardRef);

  // Copies non-react specific statics from a child component to a parent component.
  // Similar to Object.assign, but with React static keywords blacklisted from being overridden.
  const hoisted = hoistStatics(RootScreen, WrappedComponent);
  hoisted.displayName = 'RootScreen(' + getDisplayName(WrappedComponent) + ')';
  return hoisted;
};

export default withRedux;
