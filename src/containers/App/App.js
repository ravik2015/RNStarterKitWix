/* eslint-disable module-resolver/use-alias */
// @flow

import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

interface Props {}
interface State {}

export default class App extends Component<Props, State> {
  componentWillUnmount() {}
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
