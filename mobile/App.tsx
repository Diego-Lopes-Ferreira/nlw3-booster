import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MapPage from './src/pages/MapPage';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello, NLW #3!</Text> */}
      <MapPage />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 40,
  },
});
