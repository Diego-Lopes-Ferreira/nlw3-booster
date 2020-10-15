import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MapPage from './pages/MapPage';
import SplashPage from './pages/SplashPage';


const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen
          name='MapPage'
          component={MapPage}
        />
        <Screen
          name='SplashPage'
          component={SplashPage}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;