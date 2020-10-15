import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



export default function SplashPage() {

  return (
    <View style={styles.container}>

      <Text>Happy Icon</Text>

      <Text>Ourinhos</Text>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2AB5D1',
  },
  text: {
    fontSize: 40,
  },
});
