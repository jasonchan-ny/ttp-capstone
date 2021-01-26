import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import MasterNavigator from './navigators/MasterNavigator'

export default function App() {
  
  return (
    <Provider store={store}>
      <MasterNavigator />
    </Provider>
  );
}
