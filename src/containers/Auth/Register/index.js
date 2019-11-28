/* eslint-disable module-resolver/use-alias */
import AppActions from '@actions/appActions';
import {manageComponentStats} from '@actions/componentStats';
import {ThemeContext} from '@hoc/withRedux';
import React, {Component, lazy} from 'react';
import {Alert, StatusBar, StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import {goHome, goToAuth} from '@config/navigation';

const RegisterComponent = lazy(() =>
  import('../../../components/Auth/Register'),
);

class Register extends Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.manageComponentStats(
      this.props.componentId,
      'Signup',
      this.props.componentStats,
    );
  }

  _onPressSignup = (email, password) => {
    let requestPayload = {
      email: email,
      password: password,
    };
    this.props.AuthActions.signup(requestPayload);
  };

  render() {
    return (
      <View style={styles.container}>
        <RegisterComponent />
      </View>
    );
  }
}

const mapStateToProps = ({authReducer}) => ({
  isLoggedIn: authReducer.isLoggedIn,
  isLoading: authReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  AppActions: bindActionCreators(AppActions, dispatch),
  manageComponentStats: bindActionCreators(manageComponentStats, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
