/* eslint-disable module-resolver/use-alias */
import React from 'react';

const SocketContext = React.createContext(null);

export function withSocketContext(Component) {
  class ComponentWithSocket extends React.Component {
    static displayName = `${Component.displayName || Component.name}`;

    render() {
      return (
        <SocketContext.Consumer>
          {socket => (
            <Component {...this.props} socket={socket} ref={this.props.onRef} />
          )}
        </SocketContext.Consumer>
      );
    }
  }

  return ComponentWithSocket;
}

// Use this something like ---withSocketContext(Screen);
