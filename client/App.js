import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux';
import store from './redux/store';
import MasterNavigator from './navigators/MasterNavigator'
// import Logo from './components/logo';

// export default function App() {
  
//   return (
//     <Provider store = {store}>
//       <MasterNavigator />
//     </Provider>
//   );
// }

class App extends Component {
  render() {
    return(
      <Provider store = {store}>
      <Router>
        <Scene key = "root">
          <Scene key = "loading" component = {LoadingScene} initial = {true}></Scene>
          <Scene key = "auth" component = {AuthScene} initial = {true}></Scene>
        </Scene>
      </Router>
      <MasterNavigator />
      </Provider>
    )
  }
}

export default App