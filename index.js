import React from 'react';
import {StatusBar} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/config/navigation/routes';
import {Provider} from 'react-redux';
import setup, {storeObj} from './src/store/setup';

Navigation.events().registerAppLaunchedListener(() => {
  <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />;
  const store = setup();
  registerScreens(storeObj.store, Provider);
  Navigation.setRoot({
    root: {
      component: {
        name: 'Loader',
      },
    },
  });
});
