import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import store from './redux/store';
import MainNavigator from './navigators/MainNavigator';
import LoginNavigator from './navigators/LoginNavigator';


export default function App() {
  const signedIn = true;
  return (
    <Provider store={store}>
      <NavigationContainer>
        {signedIn ? (
          <MainNavigator/>
        ) : (
          <LoginNavigator/>
        )}
      </NavigationContainer>
    </Provider>
  );
}
