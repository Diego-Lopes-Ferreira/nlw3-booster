import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito'

import MapPage from './src/pages/MapPage';
import SplashPage from './src/pages/SplashPage';

export default function App() {
  const fontsLoaded = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <SplashPage />;
  } else {

    return (
      <View style={styles.container}>
        {/* <Text style={styles.text}>Hello, NLW #3!</Text> */}
        <MapPage />
        <StatusBar style="dark" />
      </View>
    );
  } // else
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 40,
  },
});
