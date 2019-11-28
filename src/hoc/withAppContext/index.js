/* eslint-disable module-resolver/use-alias */
import React from 'react';
import {ThemeContext} from '@hoc/withRedux';

export function withAppContext(Component) {
  return function WrapperComponent(props) {
    return (
      <ThemeContext.Consumer>
        {state => <Component {...props} context={state} />}
      </ThemeContext.Consumer>
    );
  };
}
