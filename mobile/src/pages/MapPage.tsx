import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


// -22.9955881,-49.8649668
export default function MapPage() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -22.9955881,
          longitude: -49.8649668,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginTop: Constants.statusBarHeight + 10,
  },
});
