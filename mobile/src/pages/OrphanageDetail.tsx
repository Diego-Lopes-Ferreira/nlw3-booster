import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';

// import { Container } from './styles';

function OrphanageDetail() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Oi, page ORPHANAGE DETAIL</Text>
    </View>
  )
}

export default OrphanageDetail;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#0089a5',
    fontSize: 28,
    fontFamily: 'Nunito_600SemiBold',
  },
});