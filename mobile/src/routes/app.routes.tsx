import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  // * Normal Routes (without shared element)
  // createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

// * Pages
import MapPage from '../pages/MapPage';
import OrphanageDetail from '../pages/OrphanageDetail';
import SplashPage from '../pages/SplashPage';
import SelectMapPosition from '../pages/createOrphanage/SelectMapPosition';
import OrphanageData from '../pages/createOrphanage/OrphanageData';

// * Normal Routes (without shared element)
// const { Navigator, Screen } = createStackNavigator();

const SharedStack = createSharedElementStackNavigator();

function AppRoutes() {
  return (
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
        name='SelectMapPosition'
        component={SelectMapPosition}
        sharedElementsConfig={(route, otherRoute, showing) => {
          return [
            {
              id: 'add_orphanage_transition_id',
              animation: 'move',
              resize: 'clip'
            },
          ];
        }}
      />
      <SharedStack.Screen
        name='OrphanageData'
        component={OrphanageData}
        sharedElementsConfig={(route, otherRoute, showing) => {
          return [
            {
              id: 'add_orphanage_transition_id',
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
  );
}

export default AppRoutes;
