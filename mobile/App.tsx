import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito'

import Routes from './src/routes';
import SplashPage from './src/pages/SplashPage';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <SplashPage />;
  } else {
    return (
      <NavigationContainer>
        <Routes />
        <StatusBar style="dark" />
      </NavigationContainer>
    );
  } // else
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
