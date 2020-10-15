import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

// * Pages
import MapPage from './pages/MapPage';
import OrphanageDetail from './pages/OrphanageDetail';
import SplashPage from './pages/SplashPage';
import OnboardingOne from './pages/OnboardingOne';
import OnboardingTwo from './pages/OnboardingTwo';


const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: 'spring',
              config: {
                stiffness: 1000,
                damping: 500,
                mass: 3,
                overshootClamping: true,
                restDisplacementThreshold: 10,
                restSpeedThreshold: 10,
              },
            },
            close: {
              animation: 'spring',
              config: {
                stiffness: 1000,
                damping: 500,
                mass: 3,
                overshootClamping: true,
                restDisplacementThreshold: 10,
                restSpeedThreshold: 10,
              },
            },
          }
        }}
      >
        <Screen
          name='OnboardingOne'
          component={OnboardingOne}
        />
        <Screen
          name='OnboardingTwo'
          component={OnboardingTwo}
        />
        <Screen
          name='MapPage'
          component={MapPage}
        />
        <Screen
          name='OrphanageDetail'
          component={OrphanageDetail}
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