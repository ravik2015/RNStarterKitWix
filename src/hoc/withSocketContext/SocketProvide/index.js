/* eslint-disable module-resolver/use-alias */
import React from 'react';

// SocketContext = {Provider, Consumer}
const SocketContext = React.createContext(null);

export class SocketProvider extends React.Component {
  render() {
    return (
      <SocketContext.Provider value={this.props.socket}>
        {this.props.children}
      </SocketContext.Provider>
    );
  }
}

/**
 * Manage to use SocketProvider something like this
 * <SocketProvider socket={this.state.socket}>
 *    <YOUR-MAIN-ENTRY-COMPONENT-WITH-SOCKET-INIT />
 *  </SocketProvider>
 **/
