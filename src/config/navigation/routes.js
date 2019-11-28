/* eslint-disable module-resolver/use-alias */
import withRedux from '../../hoc/withRedux';
import {lazy} from 'react';
import {Navigation} from 'react-native-navigation';
import Loader from '../../containers/AppContainer';

const SignIn = lazy(() => import('../../containers/Auth/SignInContainer'));
const Register = lazy(() => import('../../containers/Auth/RegisterContainer'));
const DashBoard = lazy(() => import('../../containers/DashBoardContainer'));

export const registerScreens = (store, Provider) => {
  const withReduxStore = withRedux(store);

  // Basic registration of components without any refrence as they are independent of application state
  Navigation.registerComponentWithRedux(
    'Loader',
    () => Loader,
    Provider,
    store,
  );

  // Components that need refrence and need to have access to global context
  Navigation.registerComponentWithRedux('SignIn', withReduxStore(SignIn));
  Navigation.registerComponentWithRedux('Register', withReduxStore(Register));
  Navigation.registerComponentWithRedux('DashBoard', withReduxStore(DashBoard));
};
