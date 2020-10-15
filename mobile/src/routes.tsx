import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  // * Normal Routes (without shared element)
  // createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';


// * Pages
import MapPage from './pages/MapPage';
import OrphanageDetail from './pages/OrphanageDetail';
import SplashPage from './pages/SplashPage';
import OnboardingOne from './pages/OnboardingOne';
import OnboardingTwo from './pages/OnboardingTwo';


// * Normal Routes (without shared element)
// const { Navigator, Screen } = createStackNavigator();

const SharedStack = createSharedElementStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <SharedStack.Navigator
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
        <SharedStack.Screen
          name='OnboardingOne'
          component={OnboardingOne}
        />
        <SharedStack.Screen
          name='OnboardingTwo'
          component={OnboardingTwo}
        />
        <SharedStack.Screen
          name='MapPage'
          component={MapPage}
        />
        <SharedStack.Screen
          name='OrphanageDetail'
          component={OrphanageDetail}
          sharedElementsConfig={(route, otherRoute, showing) => {
            return [
              {
                id: 'add_orphanage_transition_id',
                animation: 'move',
                resize: 'clip'
              },
              {
                id: 'detail_orphanage_transition_id',
                animation: 'move',
                resize: 'clip'
              },
            ];
          }}
        />
        <SharedStack.Screen
          name='SplashPage'
          component={SplashPage}
        />
      </SharedStack.Navigator>
    </NavigationContainer>
  );
}

/*
* Normal Routes (without shared element)
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
*/
export default Routes;