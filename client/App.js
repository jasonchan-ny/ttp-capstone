import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './navigators/MainNavigator';
import LoginNavigator from './navigators/LoginNavigator';


export default function App() {
  const signedIn = false;
  return (
    <NavigationContainer>
      {signedIn ? (
        <MainNavigator/>
      ) : (
        <LoginNavigator/>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
