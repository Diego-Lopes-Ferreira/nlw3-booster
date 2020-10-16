import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito'

import { OnboardingContextProvider } from './src/contexts/onboardingContext';
import Routes from './src/routes/index';
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
      <OnboardingContextProvider>
        <NavigationContainer>
          <Routes />
          <StatusBar style="dark" />
        </NavigationContainer>
      </OnboardingContextProvider>
    );
  } // else
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
